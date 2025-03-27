"use client";

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
import { useSongsStore } from "../stores/useSongsStore";

export default function SongsList() {
  const { search, setSearch } = useSongsStore();

  return (
    <div className="w-full max-w-2xl space-y-5">
      <div className="p-10 border rounded-xl">
        <div className="space-y-3">
          <Label>Search</Label>
          <Input
            type="search"
            placeholder="Search song..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="p-10 border rounded-xl">
        <h3 className="text-xl font-bold mb-5">Result</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Singer</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Low Key</TableCell>
              <TableCell>Niki</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
