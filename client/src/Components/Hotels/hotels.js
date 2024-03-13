
import React from "react";
import { Link } from "react-router-dom";
export function Hotels(){
    return(
        <>
           <div className="propertiesContainer hotelMain row">
        <div className="col-8 col-md-8 col-sm-8 col-lg-3 mb-4">
          <div className="card propertiescard">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 class="hotelname text-primary">Name:NK Stays</h2>
                    <h5>Room Type: Double</h5>
                    <h5>Bed Type: Twin</h5>
                    <h4 className="text-success" >Room Price: 3800</h4>
                    <h4 className="text-warning">Room Rating: 4.6⭐ </h4>
                    <h6>Room distance: 5kms from Central Railway station</h6>
                    <button className=" btn btn-secondary" onClick={()=>{alert("Your Rooms Booked Successfully!!! Have a Good Stay😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
                    
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-3 mb-4">
          <div className="card propertiescard">
            <img
              src="https://vaastudevayah.com/images/vastu-for-apartment1.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 class="hotelname text-primary">Name:Holiday Inn</h2>
                    <h5>Room Type:2BHK Apartment</h5>
                    <h5>Bed Type: Double</h5>
                    <h4 className="text-success" >Room Price: 5500</h4>
                    <h4 className="text-warning">Room Rating: 4.8⭐ </h4>
                    <h6>Room distance: 3kms from Whitefield</h6>
                
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Rooms Booked Successfully!!! Have a Good Stay😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-3 mb-4">
          <div className="card propertiescard">
            <img
              src="https://pinoyhousedesigns.com/wp-content/uploads/2018/02/PERSPECTIVE-4-700x350.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 class="hotelname text-primary">Name:KN Villa</h2>
                    <h5>Room Type: 3BHK Villas</h5>
                    <h5>Bed Type: Double </h5>
                    <h4 className="text-success" >Room Price: 6800</h4>
                    <h4 className="text-warning">Room Rating: 4.8 ⭐ </h4>
                    <h6>Room distance: 2kms from Botanical Garden</h6>
                
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Rooms Booked Successfully!!! Have a Good Stay😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-3 mb-4">
          <div className="card propertiescard">
            <img
              src="https://lockyourtrip.com/blogs/wp-content/uploads/2023/10/kerala.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 class="hotelname text-primary">Name:SJ Resorts</h2>
                    <h5>Room Type: Double</h5>
                    <h5>Bed Type: Twin</h5>
                    <h4 className="text-success" >Room Price: 3750</h4>
                    <h4 className="text-warning">Room Rating: 3.6⭐ </h4>
                    <h6>Room distance: 2kms from Kilambakkam Bustand</h6>
                
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Rooms Booked Successfully!!! Have a Good Stay😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-3 mb-4">
          <div className="card propertiescard">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/1011/101/300/apartment-condo-design-home-wallpaper-preview.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 class="hotelname text-primary">Name:Lara Hotels</h2>
                    <h5>Room Type: Double</h5>
                    <h5>Bed Type: Twin</h5>
                    <h4 className="text-success" >Room Price: 3870</h4>
                    <h4 className="text-warning">Room Rating: 3.7⭐ </h4>
                    <h6>Room distance: 4kms from Kodambakkam Bustand</h6>
                
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Rooms Booked Successfully!!! Have a Good Stay😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-3 mb-4">
          <div className="card propertiescard">
            <img
              src="https://i.pinimg.com/736x/0b/69/e1/0b69e161b919a611912be2fda2d56e2f.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 class="hotelname text-primary">Name:Nita Inn</h2>
                    <h5>Room Type: Double</h5>
                    <h5>Bed Type: Twin</h5>
                    <h4 className="text-success" >Room Price: 3950</h4>
                    <h4 className="text-warning">Room Rating: 3.4⭐ </h4>
                    <h6>Room distance: 2kms from ooty Bustand</h6>
                
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Rooms Booked Successfully!!! Have a Good Stay😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-3 mb-4">
          <div className="card propertiescard">
            <img
              src="https://rac.ae/pics/portfolio/apartment-interior-design/2/1.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 class="hotelname text-primary">Name:Sara Inn</h2>
                    <h5>Room Type: Luxury Suite</h5>
                    <h5>Bed Type: double</h5>
                    <h4 className="text-success" >Room Price: 5700</h4>
                    <h4 className="text-warning">Room Rating: 4.2⭐ </h4>
                    <h6>Room distance: 3kms from Kochi Bustand</h6>
                
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Rooms Booked Successfully!!! Have a Good Stay😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-3 mb-4">
          <div className="card propertiescard">
            <img
              src="https://media.istockphoto.com/id/1227178152/photo/modern-living-room-interior.jpg?s=612x612&w=0&k=20&c=AC-aFPObcHhEPtMTfr-RYQIkAjtFOwbxMCz5dMt-Who="
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
            <h2 class="hotelname text-primary">Name:NM Hotels</h2>
                    <h5>Room Type: Boat House</h5>
                    <h5>Bed Type: Double</h5>
                    <h4 className="text-success" >Room Price: 4750</h4>
                    <h4 className="text-warning">Room Rating: 3.6⭐ </h4>
                    <h6>Room distance: 2kms from Alapuzha</h6>
                
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Rooms Booked Successfully!!! Have a Good Stay😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
            </div>
          </div>
        </div>
        </div>
        </>
    );
}
                
      