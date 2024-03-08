import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Home from './components/Home/Home'
import Navber from "./components/Navber/Navber"


function App() {

  return (

       <div className='App' >
         <Navber/>
         <Home />
         <About />
         <Experience />
         <Contact />
     </div>
         
  )
}

export default App
