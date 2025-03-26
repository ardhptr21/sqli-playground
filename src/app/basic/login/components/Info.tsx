"use client";

import { useMemo } from "react";
import { useLoginStore } from "../stores/useLoginStore";
import { Button } from "@/components/ui/button";
import { UndoDot } from "lucide-react";
import Code from "@/components/Code";
import { cn } from "@/lib/utils";

export default function Info() {
  const { credentials, result, setResult, setCredentials } = useLoginStore();

  const query = useMemo(() => {
    return `SELECT * FROM users WHERE username = '${credentials.username}' AND password = '${credentials.password}'`;
  }, [credentials]);

  return (
    <div className="w-full">
      <div className="p-10 border rounded-xl space-y-5">
        <div className="space-y-5 w-full">
          <h3 className="text-xl font-semibold">Query</h3>
          <Code>{query}</Code>
        </div>
        <div className="space-y-3 w-full">
          <h3 className="text-xl font-semibold">Response</h3>
          {result ? (
            <p
              className={cn({
                "text-green-500": result.success,
                "text-red-500": !result.success,
              })}
            >
              {result.message}
            </p>
          ) : (
            <p>No response</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        <Button
          className="cursor-pointer"
          onClick={() => {
            setResult(null);
            setCredentials({ username: "", password: "" });
          }}
        >
          <UndoDot />
          Reset
        </Button>
      </div>
    </div>
  );
}
