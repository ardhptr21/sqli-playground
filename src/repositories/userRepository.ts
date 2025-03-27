import { prisma } from "@/lib/prisma";

interface GetUserByCredentials {
  id: number;
  username: string;
  password: string;
}
export const getUserByCredentials = async (
  username: string,
  password: string
) => {
  const result = await prisma.$queryRawUnsafe<GetUserByCredentials[]>(
    `SELECT * FROM users WHERE username='${username}' AND password='${password}'`
  );

  if (result.length <= 0) {
    return null;
  }

  return result[0];
};
