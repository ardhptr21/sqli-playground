"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IResponsePayload } from "@/lib/response";
import { Song } from "@prisma/client";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { useSongsStore } from "../stores/useSongsStore";

export default function SongsList() {
  const { search, result, setSearch, setResult, setResponseTime } =
    useSongsStore();

  const getSongs = async () => {
    const startTime = performance.now();
    try {
      const res = await axios.get<IResponsePayload<Song[]>>("/api/songs", {
        params: { search },
      });
      setResult(res.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error as AxiosError<IResponsePayload<null>>;
        setResult(err.response?.data || null);
        return;
      }
      toast.error("An error occurred");
    } finally {
      const endTime = performance.now();
      const responseTime = endTime - startTime;
      setResponseTime(responseTime);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getSongs();
  };

  return (
    <div className="w-full min-w-2xl max-w-2xl space-y-5">
      <form
        className="p-10 border rounded-xl space-y-3"
        onSubmit={handleSubmit}
      >
        <div className="space-y-3">
          <Label>Search</Label>
          <Input
            type="search"
            placeholder="Search song..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button className="w-full cursor-pointer" type="submit">
          Search
        </Button>
      </form>
      <div className="p-10 border rounded-xl">
        <h3 className="text-xl font-bold mb-5">Result</h3>
        {!result?.data ? (
          <p>No Result</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Singer</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {result.data.map((song, idx) => (
                <TableRow key={idx}>
                  <TableCell>{song.id}</TableCell>
                  <TableCell>{song.title}</TableCell>
                  <TableCell>{song.artist}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
