import React from 'react';
import Navbar from "./components/navabar/navbar";
import Body from "./components/body/body";
import AboutUs from './components/aboutUs/aboutUs'
import Services from './components/services/services';
import Footer from './components/footer/footer';

function App() {
  return(
    <>
      <Navbar/>
      <Body/>
      <AboutUs/>
      <Services/>
      
      <Footer/>

    </>
  )
}

export default App;
