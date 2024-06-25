
import './App.css'

import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';
import Signup from './pages/Signup';
import Denied from './pages/Denied';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/about' element={<Aboutus /> } />
      <Route path='/signup' element={<Signup /> } />
      <Route path ='*' element={<Notfound />} />
       <Route path='/contacts' element={<Contact />} />
       <Route path='/denied' element={<Denied />} />
    </Routes>

  )
}

export default App
