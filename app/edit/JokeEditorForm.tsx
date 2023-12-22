"use client";

export default async function JokeEditorForm() {
  const addJoke = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const body = {
      setup: formData.get("setup"),
      punch: formData.get("punchline"),
      lang: formData.get("language"),
    };
    const ret = await fetch("/jokes/api/add", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //@ts-ignore
    e.target.reset();
  };

  return (
    <>
      <h1>Add Joke</h1>
      <form onSubmit={addJoke}>
        <label htmlFor="setup">Setup</label>
        <input type="text" name="setup" />
        <br />
        <label htmlFor="punchline">Punchline</label>
        <input type="text" name="punchline" />
        <br />
        <label htmlFor="language">Language</label>
        <input type="text" name="language" />
        <button type="submit">Submit</button>
        <br />
      </form>
    </>
  );
}
