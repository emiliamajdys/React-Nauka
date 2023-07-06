import React  from "react";
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Basket from "./components/Basket";
import Navbar from "./components/Navbar";
import Sprzet from "./components/Sprzet";
import Suplementy from "./components/Suplementy";
import Home from "./components/StartSection";
import Ubrania from "./components/Ubrania";


const App = () => {
const [isOpen, setIsOpen] = useState(false);
const toggle= () => {
   setIsOpen(!isOpen)
}


   return(
<>
    
    
   <Router>
      <Navbar />
   <Routes>
      
      <Route path="/" element={<Home />} exact />
      <Route path="/ubrania" element={<Ubrania/>} exact />
      <Route path="/sprzęt" element={<Sprzet />} exact />
      <Route path="/suplementy" element={<Suplementy />} exact />
      <Route path="/basket" element={<Basket />} exact />
   </Routes>
   </Router>


   
   </>
   )


};

export default App;