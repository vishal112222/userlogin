
import React from 'react';
import './Components/Style/User.css'
import './Components/Style/Nav.css'
import './Components/Style/Crt.css'




import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Donor from './Components/Form/Donor';
import User from './Components/User/User'
import  './Components/Style/Dropdown.css'


const App = () => {

  return (
    <>
    <BrowserRouter>
    <Home />
      <Routes>
          {/* <Route path="/" element={<Book />} />
          <Route path="/" element={<Donor />} /> */}
          <Route path="/" element={<Donor />} />
          <Route path="/Usr" element={<User />} />

      
      </Routes>
    </BrowserRouter>

    </>
  );

}
export default App;



