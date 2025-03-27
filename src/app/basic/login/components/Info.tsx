"use client";

import QueryInfo from "@/components/QueryInfo";
import { useMemo } from "react";
import { useLoginStore } from "../stores/useLoginStore";

export default function Info() {
  const { credentials, result, setResult, setCredentials } = useLoginStore();

  const query = useMemo(() => {
    return `SELECT * FROM users WHERE username = '${credentials.username}' AND password = '${credentials.password}'`;
  }, [credentials]);

  return (
    <QueryInfo
      query={query}
      result={result}
      onReset={() => {
        setCredentials({ username: "", password: "" });
        setResult(null);
      }}
    />
  );
}
