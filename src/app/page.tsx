import Image from "next/image";
import Navbar from "./components/navbar";
import Landing from "./pages/landing";
import About from "./pages/about";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
    </>
  );
}
