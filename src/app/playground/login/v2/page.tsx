import Info from "./components/Info";
import LoginForm from "./components/LoginForm";

export default function BasicLogin() {
  return (
    <main>
      <section>
        <h1 className="text-4xl font-bold">Login V2</h1>
      </section>
      <div className="h-16"></div>
      <section className="mt-10 flex justify-between h-fit gap-16 items-start">
        <LoginForm />
        <Info />
      </section>
    </main>
  );
}
