"use client";

import QueryInfo from "@/components/QueryInfo";
import { useSongsStore } from "../stores/useSongsStore";
import { useMemo } from "react";
import { replaceTo } from "@/lib/utils";

const replacement = (text: string) =>
  replaceTo(text, ["SELECT", "UNION", "ORDER", "GROUP_CONCAT", "CONCAT"], "");

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
    return `SELECT * FROM songs WHERE title LIKE '%${replacement(search)}%'`;
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
