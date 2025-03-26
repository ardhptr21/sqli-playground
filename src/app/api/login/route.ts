import { prisma } from "@/lib/prisma";
import { Response } from "@/lib/response";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

interface ILoginRequest {
  username: string;
  password: string;
}

interface QueryResult {
  id: number;
  username: string;
  password: string;
}

export async function POST(req: Request) {
  const { username, password }: ILoginRequest = await req.json();

  try {
    const result: QueryResult[] = await prisma.$queryRawUnsafe(
      `SELECT * FROM users WHERE username='${username}' AND password='${password}'`
    );

    if (result.length <= 0) {
      return Response.failed("Login failed").send();
    }

    const user = result[0];

    return Response.success(`Logged in as '${user.username}'`).send();
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      const message = (error.meta?.message as string) || error.message;
      return Response.failed(message).send();
    }
    return Response.failed("An error occured").setStatus(500).send();
  }
}
