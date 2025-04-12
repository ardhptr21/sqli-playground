import { Response } from "@/lib/response";
import { replaceTo } from "@/lib/utils";
import { getUserByCredentials } from "@/repositories/userRepository";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

interface ILoginRequest {
  username: string;
  password: string;
}

export async function POST(req: Request) {
  const { username, password }: ILoginRequest = await req.json();

  const replacement = (text: string) =>
    replaceTo(replaceTo(text, [" ", "\t", "\n"], ""), ["'"], "\\'");

  try {
    const user = await getUserByCredentials(
      replacement(username),
      replacement(password)
    );

    if (!user) return Response.failed("Login failed").send();

    return Response.success(`Logged in as '${user.username}'`).send();
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      const message = (error.meta?.message as string) || error.message;
      return Response.failed(message).send();
    }
    return Response.failed("An error occured").setStatus(500).send();
  }
}
