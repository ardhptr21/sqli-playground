"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useLoginStore } from "../stores/useLoginStore";
import axios, { AxiosError } from "axios";
import { IResponsePayload } from "@/lib/response";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export default function LoginForm() {
  const { credentials, result, setCredentials, setResult } = useLoginStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", credentials);
      setResult(res.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error as AxiosError<IResponsePayload>;
        setResult(err.response?.data || null);
        return;
      }
      toast.error("An error occurred");
    }
  };

  return (
    <div className="min-w-xl max-w-xl w-full space-y-5">
      <div className="p-10 border rounded-2xl">
        <form className="space-y-5 w-full" onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) => setCredentials({ username: e.target.value })}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              type="text"
              id="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({ password: e.target.value })}
            />
          </div>
          <Button type="submit" className="w-full cursor-pointer">
            Submit
          </Button>
        </form>
      </div>
      <div className="p-10 space-y-3 rounded-xl w-full border">
        <h3 className="text-xl font-bold">Result</h3>
        {result ? (
          <p
            className={cn({
              "text-green-500": result.success,
              "text-red-500": !result.success,
            })}
          >
            Login failed
          </p>
        ) : (
          <p>No Result</p>
        )}
      </div>
    </div>
  );
}
