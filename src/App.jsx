import './App.css'
import About from './components/About/About'
import Button from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Home from './components/Home/Home'
import Navber from "./components/Navber/Navber"
import Slider from './components/Slider/Slider'



function App() {

  return (

       <div className='App' >
         <Navber/>
         <Home />
         <About />
         <Experience />
         <Button />
       <Slider />
     </div>
         
  )
}

export default App
