import Link from "next/link";
import JokeComponent from "./JokeComponent";
import classes from "./page.module.css";

export const revalidate = 0;

export default async function Home() {
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
            className={`${classes.langButton} ${classes.langButtonSelected}`}
          >
            MIX
          </Link>
        </div>
        <JokeComponent />
      </div>
    </main>
  );
}
