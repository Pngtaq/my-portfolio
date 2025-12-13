import About from "./components/About";
import MyImage from "./components/MyImage";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <h1 class="font-geist max-w-4xl mx-auto px-4 py-8">
        <MyImage />
        <div className="space-y-2">
          <About />
          <TechStack />
        </div>
      </h1>
    </>
  );
}

export default App;
