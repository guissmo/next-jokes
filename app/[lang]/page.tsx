import JokeComponent from "../JokeComponent";
import Link from "next/link";
import classes from "../page.module.css";

export default async function LangPage({ params }: any) {
  const lang = params.lang.toUpperCase();
  return (
    <main>
      <div className={classes.cardOuter}>
        <div style={{ display: "flex", columnGap: "1em" }}>
          <Link
            href="/en"
            className={`${classes.langButton} ${
              lang == "EN"
                ? classes.langButtonSelected
                : classes.langButtonUnselected
            }`}
          >
            EN
          </Link>
          <Link
            href="/tl"
            className={`${classes.langButton} ${
              lang == "TL"
                ? classes.langButtonSelected
                : classes.langButtonUnselected
            }`}
          >
            TL
          </Link>
          <Link
            href="/fr"
            className={`${classes.langButton} ${
              lang == "FR"
                ? classes.langButtonSelected
                : classes.langButtonUnselected
            }`}
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
        <JokeComponent lang={lang} />
      </div>
    </main>
  );
}
