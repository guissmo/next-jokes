import Image from "next/image";
import { prisma } from "../lib/prisma";
import Link from "next/link";
import classes from "./page.module.css";
import JokeComponent from "./JokeComponent";

export default function Home() {
  return (
    <main>
      <div className={classes.cardOuter}>
        <div style={{ display: "flex", columnGap: "1em" }}>
          <Link
            href="/en"
            className={`${classes.langButton} ${classes.langButtonUnselected}`}
          >
            EN
          </Link>
          <Link
            href="/tl"
            className={`${classes.langButton} ${classes.langButtonUnselected}`}
          >
            TL
          </Link>
          <Link
            href="/fr"
            className={`${classes.langButton} ${classes.langButtonUnselected}`}
          >
            FR
          </Link>
          <Link
            href="/"
            className={`${classes.langButton} ${classes.langButtonUnselected}`}
          >
            MIX
          </Link>
        </div>
        <JokeComponent />
      </div>
    </main>
  );
}
