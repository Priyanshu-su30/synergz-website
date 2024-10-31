import React from 'react';
import Navbar from "./components/navabar/navbar";
import Body from "./components/body/body";
import AboutUs from './components/aboutUs/aboutUs'
import Services from './components/services/services';
import Footer from './components/footer/footer';
import Career from './components/careers/careeer';

function App() {
  return(
    <>
      <Navbar/>
      <Body/>
      <AboutUs/>
      <Services/>
      <Career/>
      <Footer/>

    </>
  )
}

export default App;
