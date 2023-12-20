import JokeComponent from "../JokeComponent";

export default async function LangPage({ params }: any) {
  const { lang } = params;
  return (
    <main>
      <JokeComponent lang={lang.toUpperCase()} />
    </main>
  );
}
