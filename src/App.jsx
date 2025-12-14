import About from "./components/About";
import Experience from "./components/Experience";
import Hobby from "./components/Hobby";
import MyImage from "./components/MyImage";
import MyQuote from "./components/MyQuote";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="dark:bg-primary-dark dark:text-white min-h-screen font-geist">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-2">
        <MyImage />
        <div className="grid gap-2 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-2">
            <About />
            <TechStack />
          </div>
          <div className="lg:col-span-1 space-y-2">
            <MyQuote />
            <Experience />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Hobby />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
