import { prisma } from "@/lib/prisma";
import { Song } from "@prisma/client";

export const getSongs = async (search: string) => {
  const result = await prisma.$queryRawUnsafe<Song[]>(
    `SELECT * FROM songs WHERE title LIKE '%${search}%'`
  );
  return result;
};
