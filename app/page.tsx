// import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Essentials from "./components/Essentials";
// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })

export default function Home() {
  return (
    <main>

      {/* <Navbar/>
      <Hero/>
      <About /> */}
      <Essentials/>
      <Blog/>
      <Footer />
    </main>
  )
}
