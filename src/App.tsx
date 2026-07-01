import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div>
      <div className="border solid p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>
      <About />
    </div>
  );
}

export default App;
