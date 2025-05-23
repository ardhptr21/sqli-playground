"use client";

import QueryInfo from "@/components/QueryInfo";
import { useSongsStore } from "../stores/useSongsStore";
import { useMemo } from "react";

export default function Info() {
  const {
    search,
    result,
    responseTime,
    setResponseTime,
    setResult,
    setSearch,
  } = useSongsStore();

  const query = useMemo(() => {
    return `SELECT * FROM songs WHERE title LIKE '%${search}%'`;
  }, [search]);

  return (
    <QueryInfo
      query={query}
      responseTime={responseTime}
      result={result}
      onReset={() => {
        setResult(null);
        setSearch("");
        setResponseTime(0);
      }}
    />
  );
}
