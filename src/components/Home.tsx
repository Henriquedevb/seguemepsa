import { Card } from "./Card";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export function Home() {
  return (
    <div className="min-h-[100vh]">
      <NavBar />
      <section className="px-32 py-12 min-h-[calc(100vh-230px)] flex flex-wrap gap-8 justify-around">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <Footer />
    </div>
  );
}
