import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from "./components/navabar/navbar";
import Body from "./components/body/body";


function App() {
  return(
    <div>
      <Navbar/>
      <Body/>
      {/* <Routes>
          <Route path="/aboutUs" element={<AboutUs />} />
      </Routes> */}
    </div>
  )
}

export default App;
