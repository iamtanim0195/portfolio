import Timeline from "@/pages/Timeline";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import Skills from "@/pages/Skills";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";

export default function Home() {
  return (
    <main className="p-7 md:p-10 xl:p-15 ">
      <About />
      <Services />
      <Skills />
      <Projects />
      <Timeline />
      <Testimonials />
      <Contact />
    </main>
  );
}
