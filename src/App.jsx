import About from "./components/About";
import Experience from "./components/Experience";
import MyImage from "./components/MyImage";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="dark:bg-primary-dark dark:text-white min-h-screen font-geist">
      <div className="max-w-4xl mx-auto px-4 py-8 ">
        <MyImage />
        <div className="grid gap-2 md:grid-cols-3">
          <div className="md:col-span-2 space-y-2">
            <About />
            <TechStack />
          </div>
          <div className="md:col-span-1">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
