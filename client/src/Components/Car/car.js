
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Car(){
    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <>
           <div className="propertiesContainer flightMain row " data-aos="fade-down-right">
        <div className="col-8 col-md-8 col-sm-8 col-lg-4 mb-4">
          <div className="card propertiescard">
            <img
              src="https://spn-mda.spinny.com/img/2MdeMpQbSoSn0%2B0zq%2BRXVw/file.JPG"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 className="carname text-primary">Name :SRT Travels</h2>
                   <h4 className="carstart text-warning"> Start : Maruthamalai </h4>
                   <h4 className="cardestination text-info"> Destination : Gandhipuram </h4>
                   <h4 className="cartype text-warning">Car Type: Swift </h4>
                   <h4 className="carseater text-info"> Seat type: 3 seater </h4>
                   <h4 className="carprice text-success"> Price : Rs.30/kms </h4>
                   <h4 className="Carrating"> Rating: 4.2 ⭐ </h4>

                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Car Booked Successfully!!! Have a Good journey😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
                    
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-4 mb-4">
          <div className="card propertiescard">
            <img
              src="https://www.carlelo.com/laravel/public/uploads/model/1649927255.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 className="carname text-primary">Name :RK Travels</h2>
                   <h4 className="carstart text-warning"> Start : Kochin </h4>
                   <h4 className="cardestination text-info"> Destination : Thrissur</h4>
                   <h4 className="cartype text-warning">car type: Innova </h4>
                   <h4 className="carseater text-info"> seat type:7 seater </h4>
                   <h4 className="carprice text-success"> Price : Rs.40/kms </h4>
                   <h4 className="Carrating"> Rating: 4.8 ⭐</h4>

                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Car Booked Successfully!!! Have a Good journey😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-4 mb-4">
          <div className="card propertiescard">
            <img
              src="https://imgd.aeplcdn.com/1920x1080/cw/ec/24731/Toyota-Etios-Facelift-Right-Front-Three-Quarter-79561.jpg?v=201711021421&q=80&q=80"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 className="carname text-primary">Name :Priya Travels</h2>
                   <h4 className="carstart text-warning"> Start : Whitefield </h4>
                   <h4 className="cardestination text-info"> Destination : Bomanahali </h4>
                   <h4 className="cartype text-warning">Car type: Etios </h4>
                   <h4 className="carseater text-info"> Seat type:5 seater </h4>
                   <h4 className="carprice text-success"> Price : Rs.48/kms </h4>
                   <h4 className="Carrating"> Rating: 4.6⭐ </h4>

                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Car Booked Successfully!!! Have a Good journey😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
            </div>
          </div>
        </div>
        
        <div className="col-8 col-md-8 col-sm-8 col-lg-4 mb-4">
          <div className="card propertiescard">
            <img
              src="https://stat.overdrive.in/wp-content/odgallery/2015/01/22274_4.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 className="carname text-primary">Name :Mona Tours</h2>
                   <h4 className="carstart text-warning"> Start : Palakkad </h4>
                   <h4 className="cardestination text-info"> Destination : Thrissur </h4>
                   <h4 className="cartype text-warning">Car type: Xylo </h4>
                   <h4 className="carseater text-info"> Seat type:7 seater </h4>
                   <h4 className="carprice text-success"> Price : Rs.58/kms </h4>
                   <h4 className="Carrating"> Rating: 4.6⭐ </h4>

                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Car Booked Successfully!!! Have a Good journey😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
            </div>
          </div>
        </div>
        
        <div className="col-8 col-md-8 col-sm-8 col-lg-4 mb-4">
          <div className="card propertiescard">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUxSQhUhoqM-mS_pVnSCe4L2obTKqUekkg_g&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 className="carname text-primary">Name :KMS Travels</h2>
                   <h4 className="carstart text-warning"> Start : Erode </h4>
                   <h4 className="cardestination text-info"> Destination : Coimbatore </h4>
                   <h4 className="cartype text-warning">Car type: Innova </h4>
                   <h4 className="carseater text-info"> Seat type:7 seater </h4>
                   <h4 className="carprice text-success"> Price : Rs.52/kms </h4>
                   <h4 className="Carrating"> Rating: 4.3⭐ </h4>

                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Car Booked Successfully!!! Have a Good journey😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
            </div>
          </div>
        </div>
        
       
        
        
  
        </div>
        </>
    );
}
                
      