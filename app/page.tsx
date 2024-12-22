// import Image from "next/image";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Hero from "./components/Hero";
// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })

export default function Home() {
  return (
    <main>
      {/* <NoSSR/> */}
      

      {/* <Footer/> */}
      <Hero/>
      <Blog/>
      <Footer />
    </main>
  )
}
