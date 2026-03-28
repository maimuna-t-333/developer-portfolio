import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Courses from "@/components/home/Courses";
import Products from "@/components/home/Products";
import Testimonials from "@/components/home/Testimonials";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Courses/>
      <Products/>
      <Testimonials/>
      <About/>
      <Contact></Contact>
    </>
  );
}