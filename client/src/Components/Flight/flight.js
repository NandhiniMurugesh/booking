
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Flight(){
    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <>
         
           <div className="propertiesContainer flightMain row " data-aos="fade-up-left">
           <h3 className="text-light text-center" data-aos="fade-up-left">Look into the Flights</h3>
        <div className="col-8 col-md-8 col-sm-8 col-lg-4 mb-4">
          <div className="card propertiescard" data-aos="fade-up-left">
            <img
              src="https://static.startuptalky.com/2021/09/Indigo-Airlines-StartupTalky.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 className="flightname text-primary">Name : Indigo</h2>
                   <h4 className="flightstart text-warning"> Start : Coimbatore </h4>
                   <h4 className="flightdestination text-info"> Destination : Chennai </h4>
                   <h4 className="flightarrival text-warning"> Arrival : 14:00 </h4>
                   <h4 className="flightdeparture text-info"> Departure : 14:20 </h4>
                   <h4 className="flightprice text-success"> Price : 3200 </h4>
                   <h4 className="flightclass"> Premium Economy Class </h4>

                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Tickets Booked Successfully!!! Have a Good journey😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
                    
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-4 mb-4">
          <div className="card propertiescard" data-aos="fade-up-left">
            <img
              src="https://logos-world.net/wp-content/uploads/2023/01/SpiceJet-Logo.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 className="flightname text-primary">Name : SpiceJet</h2>
                   <h4 className="flightstart text-warning"> Start : Chennai </h4>
                   <h4 className="flightdestination text-info"> Destination : Bangalore </h4>
                   <h4 className="flightarrival text-warning"> Arrival : 16:20 </h4>
                   <h4 className="flightdeparture text-info"> Departure : 16:50 </h4>
                   <h4 className="flightprice text-success"> Price : 2800 </h4>
                   <h4 className="flightclass">  Economy Class </h4>

                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Tickets Booked Successfully!!! Have a Good journey😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-4 mb-4">
          <div className="card propertiescard" data-aos="fade-up-left">
            <img
              src="https://logohistory.net/wp-content/uploads/2023/07/AirAsia-Logo-2009.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 className="flightname text-primary">Name : Air Asia</h2>
                   <h4 className="flightstart text-warning"> Start : Bangalore </h4>
                   <h4 className="flightdestination text-info"> Destination : Kochin </h4>
                   <h4 className="flightarrival text-warning"> Arrival : 20:20 </h4>
                   <h4 className="flightdeparture text-info"> Departure : 20:55 </h4>
                   <h4 className="flightprice text-success"> Price : 4500 </h4>
                   <h4 className="flightclass">  Business Class </h4>
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Tickets Booked Successfully!!! Have a Good journey😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-4 mb-4">
          <div className="card propertiescard" data-aos="fade-up-left">
            <img
              src="https://airlinecontacts.com/wp-content/uploads/2021/05/Vistara_Logo.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 className="flightname text-primary">Name : Vastara </h2>
                   <h4 className="flightstart text-warning"> Start : Bangalore </h4>
                   <h4 className="flightdestination text-info"> Destination : Coimbatore </h4>
                   <h4 className="flightarrival text-warning"> Arrival : 11:00 </h4>
                   <h4 className="flightdeparture text-info"> Departure : 11:25 </h4>
                   <h4 className="flightprice text-success"> Price : 3500 </h4>
                   <h4 className="flightclass">  Premium Economy Class </h4>
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Tickets Booked Successfully!!! Have a Good journey😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-4 mb-4">
          <div className="card propertiescard" data-aos="fade-up-left">
            <img
              src="https://www.medianews4u.com/wp-content/uploads/2023/10/Air-India-Express-unveils-new-brand-identity-aircraft-livery.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 className="flightname text-primary">Name : Air India </h2>
                   <h4 className="flightstart text-warning"> Start : Kochin </h4>
                   <h4 className="flightdestination text-info"> Destination : Coimbatore </h4>
                   <h4 className="flightarrival text-warning"> Arrival : 11:20 </h4>
                   <h4 className="flightdeparture text-info"> Departure : 11:45 </h4>
                   <h4 className="flightprice text-success"> Price : 2500 </h4>
                   <h4 className="flightclass">  Economy Class </h4>
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Tickets Booked Successfully!!! Have a Good journey😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-4 mb-4">
          <div className="card propertiescard" data-aos="fade-up-left">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunQuMtZDhpJ45ff1ewoIhMZG3saIstJeFSg&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 className="flightname text-primary">Name : KingFisher </h2>
                   <h4 className="flightstart text-warning"> Start : Kochin </h4>
                   <h4 className="flightdestination text-info"> Destination : Coimbatore </h4>
                   <h4 className="flightarrival text-warning"> Arrival : 09:20 </h4>
                   <h4 className="flightdeparture text-info"> Departure : 09:45 </h4>
                   <h4 className="flightprice text-success"> Price : 5800 </h4>
                   <h4 className="flightclass">  Business class </h4>
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Tickets Booked Successfully!!! Have a Good journey😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
            </div>
          </div>
        </div>
        
  
        </div>
        </>
    );
}
                
      