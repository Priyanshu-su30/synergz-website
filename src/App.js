import React from 'react';
import Navbar from "./components/navabar/navbar";
import Body from "./components/body/body";
import AboutUs from './components/aboutUs/aboutUs'
import Services from './services/services';

function App() {
  return(
    <>
      <Navbar/>
      <Body/>
      <AboutUs/>
      <Services/>

    </>
  )
}

export default App;
