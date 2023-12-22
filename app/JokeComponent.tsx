"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "./page.module.css";
import { prisma } from "@/lib/prisma";

export default function JokeComponent({ lang }: { lang?: "FR" | "EN" | "TL" }) {
  const router = useRouter();
  const [showPunchline, setShowPunchline] = useState(false);
  const [joke, setJoke] = useState<{
    setup: string;
    punch: string;
    lang: "FR" | "TL" | "EN";
  } | null>(null);

  useEffect(() => {
    getJoke();
  }, []);

  async function getJoke() {
    const res = await fetch(lang ? `/api/joke/${lang}` : "/api/joke");
    const newJoke = await res.json();
    if (newJoke.setup && newJoke.punch && newJoke.lang)
      setJoke({
        setup: newJoke.setup,
        punch: newJoke.punch,
        lang: newJoke.lang,
      });
  }

  return (
    <div className={classes.cardInner}>
      <span className={classes.setup}>
        <span>{joke ? joke.setup : "Loading..."}</span>
      </span>
      {showPunchline ? (
        <>
          <span className={`${classes.punchline} ${classes.revealed}`}>
            <span>{joke ? joke.punch : ""}</span>
            <span
              onClick={() => {
                setShowPunchline(false);
                getJoke();
              }}
              className={classes.newJoke}
            >
              {lang == "FR" ? "Encore une" : ""}
              {lang == "EN" ? "Another one" : ""}
              {lang == "TL" ? "Isa pa" : ""}
              {!lang ? "Another one" : ""}
            </span>
          </span>
        </>
      ) : (
        <>
          <span className={classes.punchline}>
            <span
              className={classes.revealPunchline}
              onClick={() => {
                setShowPunchline(true);
              }}
            ></span>
          </span>
        </>
      )}
    </div>
  );
}
