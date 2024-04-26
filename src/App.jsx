import { Menu } from "./components/menu/menu"
import { Navbar } from "./components/navbar/navbar"
import { Home } from "./pages/home/home"
import "./app.css"
function App() {
  
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Home/>
          </div>
        </div>
      </div>
    )
  
}
export default App
