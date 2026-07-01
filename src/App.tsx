import Navbar from "./components/Navbar"
import Home from "./components/Home"

function App() {
  return (
    <div>
      <div className="border solid p-5 md:px-[15%]">
      <Navbar/>
      </div>
      <Home/>
    </div>
  )
}

export default App
