import React from "react";
import { Link } from "react-router-dom";
export function Car(){
    return(
        <>
          <div className='row carcard container-fluid'>
                    <div className='col-lg-4 mt-3 singleimage '>
                    <div id="carouselExampleAutoplaying1" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://5.imimg.com/data5/SELLER/Default/2021/6/VF/QG/QD/40513234/maruti-suzuki-swift-car-travel-services.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.siddeshwaratravels.in/car_images/22.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cochincarrentals.in/wp-content/uploads/2021/05/Mahindra-Xylo.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className='col-lg-6 mt-3 singlecard'>
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
               <div className='seperator'></div>

{/* second */}
               <div className='row carcard container-fluid'>
                    <div className='col-lg-4 mt-3 singleimage '>
                    <div id="carouselExampleAutoplaying2" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/autocar/Etios%20(4)_1.jpg&w=726&h=482&q=75&c=1" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://static.wixstatic.com/media/fb0bbe_e876e773e3684204bf55d6d66baea7d8~mv2.jpg/v1/fill/w_630,h_500,al_c,q_80,enc_auto/fb0bbe_e876e773e3684204bf55d6d66baea7d8~mv2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.indianauto.com/crop/459x287/2020/06/17/20200617005640-50de.jpeg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className='col-lg-6 mt-3 singlecard'>
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
               <div className='seperator'></div>

               {/* third */}
               <div className='row carcard container-fluid'>
                    <div className='col-lg-4 mt-3 singleimage '>
                    <div id="carouselExampleAutoplaying3" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20111003110854_Toyota-Etios-Diesel-2.jpg&w=726&h=482&q=75&c=1" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://5.imimg.com/data5/SELLER/Default/2021/8/GQ/YJ/KC/56967737/img-e1745-500x500.JPG" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.japjitravel.com/resizer/resizer.php?file=../jap/media/uploads/xylo-interior.jpg&width=750&height=375&action=resize&quality=90" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying3" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying3" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className='col-lg-6 mt-3 singlecard'>
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
               <div className='seperator'></div>
                
        </>
    );
}