import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { setup, punch, lang } = await req.json();
  const newJoke = await prisma.joke.create({
    data: {
      setup,
      punch,
      lang,
    },
  });
  return new Response(JSON.stringify(newJoke));
}
