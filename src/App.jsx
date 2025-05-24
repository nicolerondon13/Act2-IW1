import {Link, BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from "./ui/NavBar"
import Home from "./pages/Home"
import NewRestaurant from "./pages/NewRestaurant"
import Search from "./pages/Search"

function App() {
    return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <NavBar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/new" element={<NewRestaurant/>}></Route>
            <Route path="/search" element={<Search/>}></Route>
          </Routes>
        </div>

        <div className="flex flex-col min-h-screen">
          <main className="glex-grow">
            <Home />
          </main>
          <footer className="bg-red-800 text-white py-4">
            <div className="flex justify-center mb-2">
              <img src="https://img.icons8.com/?size=100&id=ipt0TncugVAI&format=png&color=000000" alt="Logo" className="w-8 h-8 text-center mr-2"/>
              <p className="text-white-600 mb-2"> Todos los derechos son reservados.</p>
            </div>
          </footer>
        </div>
      </div>

    </Router>

    
  )
}

export default App
