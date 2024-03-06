import React from "react";
import { Homemenu } from "../Homemenu/homemenu";
import Header from "../Header/header";
import { Hoteloffer } from "../Hoteloffer/hoteloffer";
import { Location } from "../Location/location";
import { Spot } from "../Spot/spot";
import Footer from "../Footer/footer";


export function Home(){
    return(
        <>
          <Homemenu/>
          <Header/>
          <Hoteloffer/>
        <Location/>     
        <Spot/>   
        <Footer/>

  
    </>
    );
}