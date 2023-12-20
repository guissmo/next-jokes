import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: any) {
  const { lang } = context.params;
  const jokes = await prisma.$queryRaw`
  SELECT * FROM Joke
  WHERE lang=${lang.toUpperCase()}
  ORDER BY RANDOM()
  LIMIT 1`;
  if (request.body) {
    // Useless code so that it's not static.
    const a = 1;
  } else {
    const b = 1;
  }
  //@ts-ignore
  const joke = jokes[0];
  return NextResponse.json(joke);
}
