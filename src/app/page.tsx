import PlayCard from "@/components/PlayCard";

export default function Home() {
  return (
    <main className="flex justify-center flex-col mt-16">
      <section className="max-w-4xl mx-auto w-full">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold">SQL Injection Playground</h1>
          <p>
            Playground for demonstrating SQL injection vulnerabilities and
            testing SQL injection payloads.
          </p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto w-full py-5 grid grid-cols-2 gap-5">
        <PlayCard
          title="Login"
          description="Simple login form with SQL injection vulnerability."
          href="/playground/login"
        />
        <PlayCard
          title="Songs"
          description="List of songs with SQL injection vulnerability."
          href="/playground/songs"
        />
        <PlayCard
          title="Login V2"
          description="Improvement with some restriction of the login form with SQL injection vulnerability."
          href="/playground/login/v2"
        />
        <PlayCard
          title="Songs V2"
          description="Improvement with some restriction of the list of songs with SQL injection vulnerability."
          href="/playground/songs/v2"
        />
      </section>
      <section className="text-center">
        <small>
          Made by <span className="font-bold">@rootkids</span>
        </small>
      </section>
    </main>
  );
}
