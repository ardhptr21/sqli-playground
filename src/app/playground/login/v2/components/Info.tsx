"use client";

import QueryInfo from "@/components/QueryInfo";
import { replaceTo } from "@/lib/utils";
import { useMemo } from "react";
import { useLoginStore } from "../stores/useLoginStore";

const replacement = (text: string) =>
  replaceTo(replaceTo(text, [" ", "\t", "\n"], ""), ["'"], "\\'");

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
    return `SELECT * FROM users WHERE username = '${replacement(
      credentials.username
    )}' AND password = '${replacement(credentials.password)}'`;
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
