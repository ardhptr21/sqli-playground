import Info from "./components/Info";
import SongsList from "./components/SongsList";

export default function BeginnerSongs() {
  return (
    <main>
      <section>
        <h1 className="text-4xl font-bold">Beginner - Songs</h1>
      </section>
      <div className="h-16"></div>
      <section className="mt-10 flex justify-between h-fit gap-16 items-start">
        <SongsList />
        <Info />
      </section>
    </main>
  );
}
