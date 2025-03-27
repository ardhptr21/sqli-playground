import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Code({ children }: { children: string }) {
  return (
    <code className="bg-foreground text-background px-3 py-2 rounded-md max-w-full overflow-auto block break-all">
      <SyntaxHighlighter
        language="sql"
        customStyle={{
          background: "transparent",
          border: "none",
        }}
        style={atomOneDark}
      >
        {children}
      </SyntaxHighlighter>
    </code>
  );
}
