import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export const getUserByCredentials = async (
  username: string,
  password: string
) => {
  const result = await prisma.$queryRawUnsafe<User[]>(
    `SELECT * FROM users WHERE username='${username}' AND password='${password}'`
  );

  if (result.length <= 0) {
    return null;
  }

  return result[0];
};
