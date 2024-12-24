// import Image from "next/image";

import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
// const HeroContent = dynamic(()=> import('./components/Hero'), {
//   ssr: false
// })
import Hero from "./components/Hero";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Essentials from "./components/Essentials";

export default function Home() {
  return (
    <main>

      <Navbar/>
      <Hero/>
      <About />
      <Essentials/>
      <Blog/>
      <Footer />
    </main>
  )
}
