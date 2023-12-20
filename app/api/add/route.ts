import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const { setup, punch, lang } = await req.json();
  const newJoke = await prisma.joke.create({
    data: {
      setup,
      punch,
      lang,
    },
  });
  return NextResponse.json(newJoke);
}
