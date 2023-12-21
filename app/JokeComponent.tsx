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
    setJoke(null);
    const res = await fetch(
      lang ? `/jokes/api/joke/${lang}` : "/jokes/api/joke"
    );
    const joke = await res.json();
    if (joke.setup && joke.punch && joke.lang)
      setJoke({ setup: joke.setup, punch: joke.punch, lang: joke.lang });
  }

  return (
    <div className={classes.cardOuter}>
      <div className={classes.cardInner}>
        <span className={classes.setup}>
          <span>{joke ? joke.setup : ""}</span>
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
    </div>
  );
}
