import React from "react";
import { Link } from "react-router-dom";
export function Flight(){
    return(
        <>
          <div className='row flightcard container-fluid'>
                    <div className='col-lg-4 mt-3 singleimage '>
                    <div id="carouselExampleAutoplaying1" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://logos-world.net/wp-content/uploads/2023/01/IndiGo-Logo.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.bangaloreaviation.com/wp-content/uploads/2016/03/IndiGo_A320neo_VT-ITC_Cabin_Front_DSC_6134_2560px_WM.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Indigo_1400x600.jpg:cf-webp:w-1400:h-500" class="d-block w-100" alt="..."/>
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
               <div className='seperator'></div>

               {/* second */}
          <div className='row flightcard container-fluid'>
                    <div className='col-lg-4 mt-3 singleimage '>
                    <div id="carouselExampleAutoplaying2" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://1000logos.net/wp-content/uploads/2021/07/SpiceJet-Logo.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.moneycontrol.com/static-mcnews/2022/02/SpiceJet-2.jpg?impolicy=website&width=1600&height=900" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.arabianbusiness.com/cloud/2021/09/16/MRgwnRaj-Boeing-737-Next-Generation-Interior.jpg" class="d-block w-100" alt="..."/>
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
                <div className='seperator'></div>

                {/* third */}
          <div className='row flightcard container-fluid'>
                    <div className='col-lg-4 mt-3 singleimage '>
                    <div id="carouselExampleAutoplaying3" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.shutterstock.com/image-photo/kuala-lumpurmay-06-airasia-logo-600nw-230535022.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/PK-AXC.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.squarespace-cdn.com/content/v1/5a5dbe4632601eb31977f947/1629888465389-WRIXQB37LY0KJWX7SUUD/premium-flatbed-1.jpg" class="d-block w-100" alt="..."/>
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
               <div className='seperator'></div>
                {/* fourth */}
          <div className='row flightcard container-fluid'>
                    <div className='col-lg-4 mt-3 singleimage '>
                    <div id="carouselExampleAutoplaying4" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://seeklogo.com/images/V/vistara-logo-C07710BC2B-seeklogo.com.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://thehardcopy.co/wp-content/uploads/Vistara.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.airvistara.com/content/dam/airvistara/global/english/travel-information/vistara-experience/on-board/common/images/Cabin.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying4" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying4" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className='col-lg-6 mt-3 singlecard'>
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
               <div className='seperator'></div>
                {/* fifth */}
          <div className='row flightcard container-fluid'>
                    <div className='col-lg-4 mt-3 singleimage '>
                    <div id="carouselExampleAutoplaying5" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://3adeal.com/images/thumbnails/884/322/detailed/2/Kinglogo-6.jpg?t=1675594751" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://imgproc.airliners.net/photos/airliners/5/6/8/2209865.jpg?v=v40" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Kingisher_a320_on_runway_of_hyderabad_intl_airport.jpg/1200px-Kingisher_a320_on_runway_of_hyderabad_intl_airport.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying5" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying5" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className='col-lg-6 mt-3 singlecard'>
                    <h2 className="flightname text-primary">Name : Kingfisher</h2>
                   <h4 className="flightstart text-warning"> Start : Chennai </h4>
                   <h4 className="flightdestination text-info"> Destination : Kochin </h4>
                   <h4 className="flightarrival text-warning"> Arrival : 02:05 </h4>
                   <h4 className="flightdeparture text-info"> Departure : 02:35 </h4>
                   <h4 className="flightprice text-success"> Price : 4500 </h4>
                   <h4 className="flightclass">  First Class </h4>
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Tickets Booked Successfully!!! Have a Good journey😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
                    </div>
               </div>
               <div className='seperator'></div>

                
        </>
    );
}