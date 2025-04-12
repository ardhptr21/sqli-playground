"use client";

import { useRouter } from "next/navigation";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type PlayCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function PlayCard({ title, description, href }: PlayCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <Card className="cursor-pointer" onClick={handleClick}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
