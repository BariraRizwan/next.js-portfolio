import Image from "next/image";
import Header from "./components/header/page";
import Herosection from "./components/herosection/page";
import About from "./components/about/page";
import Projects from "./components/projects/page";
import Footer from "./components/footer/page";


export default function Home() {
  return (
   <div>
           <Header></Header>
           <Herosection></Herosection>
           <About></About>
           <Projects></Projects>
           <Footer></Footer>
   </div>
  
  );
}
