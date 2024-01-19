
import React from 'react';
import './Components/Style/User.css'
import './Components/Style/Nav.css'
import './Components/Style/Crt.css'
import './Components/Style/Email.css'
import './Components/Style/Dropdown.css'
import './Components/Style/Collector.css'
import './Components/Style/Buttons.css'
import './Components/Style/CollectorForm.css'

import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './Components/User/User'
import Collector from './Components/Collector/Collector';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
        <Route path="/Collector" element={<Collector />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>

    </>
  );

}
export default App;

