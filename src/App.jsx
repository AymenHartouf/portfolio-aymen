import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Technologies } from "./components/Technologies";
import { Projects } from "./components/Projects";
import {Contacts} from "./components/Contacts";


function App() {
  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"
    >
      {/* Fixed background gradient layer */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-neutral-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
