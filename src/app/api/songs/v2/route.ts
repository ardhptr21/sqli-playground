import { Response } from "@/lib/response";
import { replaceTo } from "@/lib/utils";
import { getSongs } from "@/repositories/songRepository";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { type NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const search = searchParams.get("search") || "";

  const replacement = (text: string) =>
    replaceTo(text, ["SELECT", "UNION", "ORDER", "GROUP_CONCAT", "CONCAT"], "");

  try {
    const songs = await getSongs(replacement(search));
    return Response.success("Successfully get songs").setData(songs).send();
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      const message = (error.meta?.message as string) || error.message;
      return Response.failed(message).send();
    }
    return Response.failed("An error occured").setStatus(500).send();
  }
};
