import './App.css'
import About from './components/About/About'
import Button from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Generate from './components/Generate/Generate'

import Home from './components/Home/Home'
import Navber from "./components/Navber/Navber"





function App() {

  return (

       <div className='App' >
         <Navber/>
         <Home />
         <Generate />
         <About />
         <Experience />
         <Button />
         
      
     </div>
         
  )
}

export default App
