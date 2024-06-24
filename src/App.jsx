
import './App.css'

import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/about' element={<Aboutus /> } />
      <Route path ='*' element={<Notfound />} />
       <Route path='/contacts' element={<Contact />} />
    </Routes>

  )
}

export default App
