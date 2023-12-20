const jokes = [
  {
    id: 0,
    setup: "Ano ang tawag sa mangga kapag niyakap?",
    punch: "Manggang hinug.",
  },
  {
    id: 1,
    setup: "Ano ang tawag sa manggang maliwanag",
    punch: "Manggang ilaw.",
  },
  {
    id: 2,
    setup: "Q: Where do you see yourself in five years?",
    punch: "A: I think my biggest weakness is listening.",
  },
];

import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const jokes = await prisma.$queryRaw`
  SELECT * FROM Joke
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
