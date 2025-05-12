import Navbar from "./components/navbar";
import Landing from "./pages/landing";
import About from "./pages/about";
import Experience from "./pages/experience";
import Projects from "./pages/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Projects />
    </>
  );
}
