import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Agency from "@/components/Agency";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Work />
      <Agency />
      <Marquee />
      <Contact />
    </>
  );
}
