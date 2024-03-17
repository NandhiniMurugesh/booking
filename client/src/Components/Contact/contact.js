import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faSquareInstagram, faSquareTwitter} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export function Contact(){
    useEffect(() => {
        AOS.init();
      }, []);
    return(
        <>
             

        <div className="contactMain ">
        <div className="seperator"></div>
            <h3 className="text-center" data-aos="fade-down">Contact Us </h3>.
          
            <div className="contactContainer row">
                <div className="col-lg-6" data-aos="fade-right">
               <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=542,Anna%20Nagar,Tiruppur%20-%20641602+(Booking.com)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
                </div>
                <div className="col-lg-6" data-aos="fade-left">
              <h2 className="text-primary">Booking.com</h2>
              <h6>We are a Trip Organizing Private limited. Here we will serve as a Guide to the Customers and Their trip. We will suggest them the high rated Hotels, Flights and Car taxis for their trip </h6>
              <div className=" socialmedia">
                <p>Reach us On</p>
           <button className="btn btn-outline-primary">  <FontAwesomeIcon icon={faFacebook} className="facebook" /></button> 
           <button className="btn btn-outline-warning ms-2">    <FontAwesomeIcon icon={faSquareInstagram} className="instagram  ms-2" /></button> 
           <button className="btn btn-outline-info ms-2">   <FontAwesomeIcon icon={faSquareTwitter} className="twitter  ms-2" /></button> 
              </div>
              <div className="writeus">
                <p>Write Us on</p>
                <button className="btn btn-outline-danger ms-2">   <FontAwesomeIcon icon={faEnvelope} className="email  ms-2" />  wecare@booking.com</button> 
              </div>
            </div>

        </div>
        <div className="seperator"></div>
        </div>
       

        </>
    );
}