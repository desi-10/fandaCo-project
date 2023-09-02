import About from "@/components/About";
import Connect from "@/components/Connect";
import Courses from "@/components/Courses";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Courses />
      <Connect />
      <FAQ />
    </main>
  );
}
