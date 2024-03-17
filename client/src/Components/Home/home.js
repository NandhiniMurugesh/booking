import React from "react";
import { Homemenu } from "../Homemenu/homemenu";
import Header from "../Header/header";
import { Hoteloffer } from "../Hoteloffer/hoteloffer";
import { Location } from "../Location/location";
import { Spot } from "../Spot/spot";
import Footer from "../Footer/footer";
import { Subscribe } from "../Subscribe/subscribe";
import { Properties } from "../Properties/properties";
import { Topproperties } from "../Topproperties/topproperties";
import { Advertisement } from "../Advertisement/advertisement";
import { Review } from "../Review/review";
import { Contact } from "../Contact/contact";


export function Home(){
    return(
        <>
          <Homemenu/>
          <Header/>
          <div className="homeMain">
          <Hoteloffer/>
        <Location/>     
        <Spot/> 
     
        <Properties/>
        <Topproperties/>
        <Review/>
        </div> 
        <Advertisement/>
        <Contact/>
        <Subscribe/> 
        <Footer/>

  
    </>
    );
}