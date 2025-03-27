import { cn } from "@/lib/utils";
import { UndoDot } from "lucide-react";
import Code from "./Code";
import { Button } from "./ui/button";

interface IQueryInfoProps {
  query: string;
  result: { success: boolean; message: string } | null;
  onReset?: () => void;
}

export default function QueryInfo({ query, result, onReset }: IQueryInfoProps) {
  return (
    <div className="w-full overflow-hidden">
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
        <Button className="cursor-pointer" onClick={onReset}>
          <UndoDot />
          Reset
        </Button>
      </div>
    </div>
  );
}
