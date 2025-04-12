"use client";

import QueryInfo from "@/components/QueryInfo";
import { useMemo } from "react";
import { useLoginStore } from "../stores/useLoginStore";

export default function Info() {
  const {
    credentials,
    result,
    setResult,
    responseTime,
    setResponseTime,
    setCredentials,
  } = useLoginStore();

  const query = useMemo(() => {
    return `SELECT * FROM users WHERE username = '${credentials.username}' AND password = '${credentials.password}'`;
  }, [credentials]);

  return (
    <QueryInfo
      query={query}
      result={result}
      responseTime={responseTime}
      onReset={() => {
        setCredentials({ username: "", password: "" });
        setResult(null);
        setResponseTime(0);
      }}
    />
  );
}
