
import React from 'react';
import './Components/Style/User.css'
import './Components/Style/Nav.css'
import './Components/Style/Crt.css'
import './Components/Style/Email.css'
import './Components/Style/Dropdown.css'


import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './Components/User/User'


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/Usr" element={<User />} />
        </Routes>
      </BrowserRouter>

    </>
  );

}
export default App;



