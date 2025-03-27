import { Response } from "@/lib/response";
import { getSongs } from "@/repositories/songRepository";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { type NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const search = searchParams.get("search") || "";

  try {
    const songs = await getSongs(search);
    return Response.success("Successfully get songs").setData(songs).send();
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      const message = (error.meta?.message as string) || error.message;
      return Response.failed(message).send();
    }
    return Response.failed("An error occured").setStatus(500).send();
  }
};
