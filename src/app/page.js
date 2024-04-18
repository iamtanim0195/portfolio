import Timeline from "@/page/Timeline";
import About from "@/page/About";
import Projects from "@/page/Projects";
import Services from "@/page/Services";
import Skills from "@/page/Skills";
import Testimonials from "@/page/Testimonials";
import Contact from "@/page/Contact";

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
