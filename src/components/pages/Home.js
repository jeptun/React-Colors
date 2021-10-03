import React from "react";
import "../../App.css";
import Cards from "../Cards.js";
import Footer from "../Footer";
import HeroSection from "../HeroSection.js";

function Home (){
    return (
      <>  
      <HeroSection/>
      <Cards />
      <Footer/>
      </> 
    )
}

export default Home;