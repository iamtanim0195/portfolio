import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import Skills from "@/pages/Skills";

export default function Home() {
  return (
    <main className="p-7 md:p-10 xl:p-15 ">
      <About />
      <Services />
      <Skills />
      <Projects />
    </main>
  );
}
