import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faSquareInstagram, faSquareTwitter} from '@fortawesome/free-brands-svg-icons'

export function Review(){
    useEffect(() => {
        AOS.init();
      }, []);
    return(
        <>
     <div className="seperator"></div>
      <h3 className="text-danger-emphasis" data-aos="fade-right">Browse By Review!!!</h3>
      <div className="ReviewContainer row " data-aos="fade-right">
        <div className="col-8 col-md-8 col-sm-8 col-lg-3 mb-4">
          <div className="card Reviewcard " data-aos="fade-right">
            <img
              src="https://media.istockphoto.com/id/1341094522/photo/calm-millennial-indian-lady-breath-deep-meditate-with-closed-eyes.jpg?s=612x612&w=0&k=20&c=6W6YUsGWj7pN-s1xUKH6S6R-YGQ6i8ZP1tbeVpKh4AQ="
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Linda Taylor</h5>
             
                            <h6 className="card-title">4.2 ⭐</h6>
              <p>Hi There! This is an awesome website for trips.</p>
              <div className=" socialmedia">
           <button className="btn btn-outline-primary">  <FontAwesomeIcon icon={faFacebook} className="facebook" /></button> 
           <button className="btn btn-outline-warning ms-2">    <FontAwesomeIcon icon={faSquareInstagram} className="instagram  ms-2" /></button> 
           <button className="btn btn-outline-info ms-2">   <FontAwesomeIcon icon={faSquareTwitter} className="twitter  ms-2" /></button> 
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-3 mb-4">
          <div className="card Reviewcard" data-aos="fade-right">
            <img
              src="https://cdn6.f-cdn.com/files/download/38546484/28140e.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h5 className="card-title">Christopher Lam</h5>
              <h6 className="card-title">4.1 ⭐</h6>
              <p>Hi Folks! This is a life saviour on my last minute trips</p>
              <div className=" socialmedia">
           <button className="btn btn-outline-primary">  <FontAwesomeIcon icon={faFacebook} className="facebook" /></button> 
           <button className="btn btn-outline-warning ms-2">    <FontAwesomeIcon icon={faSquareInstagram} className="instagram  ms-2" /></button> 
           <button className="btn btn-outline-info ms-2">   <FontAwesomeIcon icon={faSquareTwitter} className="twitter  ms-2" /></button> 
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-3 mb-4">
          <div className="card Reviewcard" data-aos="fade-right">
            <img
              src="https://img.freepik.com/free-photo/happy-young-businessman-walking-near-business-center_171337-19784.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h5 className="card-title">George Williams</h5>
              <h6 className="card-title">4.7 ⭐</h6>
              <p>This is the best website that I have ever seen for trip plans</p>
              <div className=" socialmedia">
           <button className="btn btn-outline-primary">  <FontAwesomeIcon icon={faFacebook} className="facebook" /></button> 
           <button className="btn btn-outline-warning ms-2">    <FontAwesomeIcon icon={faSquareInstagram} className="instagram  ms-2" /></button> 
           <button className="btn btn-outline-info ms-2">   <FontAwesomeIcon icon={faSquareTwitter} className="twitter  ms-2" /></button> 
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-3 mb-4">
          <div className="card Reviewcard" data-aos="fade-right">
            <img
              src="https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.jpg?s=612x612&w=0&k=20&c=Dw1nKFtnU_Bfm2I3OPQxBmSKe9NtSzux6bHqa9lVZ7A="
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h5 className="card-title">Emma Johnson</h5>
              <h6 className="card-title">4.5 ⭐</h6>
              <p>All the place suggestions are good and very useful.</p>
              <div className=" socialmedia">
           <button className="btn btn-outline-primary">  <FontAwesomeIcon icon={faFacebook} className="facebook" /></button> 
           <button className="btn btn-outline-warning ms-2">    <FontAwesomeIcon icon={faSquareInstagram} className="instagram  ms-2" /></button> 
           <button className="btn btn-outline-info ms-2">   <FontAwesomeIcon icon={faSquareTwitter} className="twitter  ms-2" /></button> 
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className="seperator"></div>
        </>
    );

}