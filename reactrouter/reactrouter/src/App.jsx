import './App.css'
import{Routes,Route} from "react-router-dom";
import React from 'react'
import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
    </>
  );
}
export default App;
