import React from "react";
import { Link } from "react-router-dom";
export function Hotels(){
    return(
        <>
          <div className='row hotelcard container-fluid'>
                    <div className='col-lg-4 mt-3 singleimage '>
                    <div id="carouselExampleAutoplaying1" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-image-of-Ooty-Hotels_5th-dec.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.hotelscombined.com/himg/28/d2/de/leonardo-1124395-201.3_room_O-697525.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cf.bstatic.com/xdata/images/hotel/270x200/206683386.jpg?k=79212725161df0806a010f380757cab05220701c176e91249f2c180745722cc3&o=" class="d-block w-100" alt="..."/>
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
                    <h2 class="hotelname text-primary">Name:MJ Residency</h2>
                    <h5>Room Type: Double</h5>
                    <h5>Bed Type: Double</h5>
                    <h4 className="text-success" >Room Price: 4500</h4>
                    <h4 className="text-warning">Room Rating: 4.5⭐ </h4>
                    <h6>Room distance: 5kms from ooty bustand</h6>
                
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Rooms Booked Successfully!!! Have a Good Stay😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
                    </div>
              

                </div>
                <div className='seperator'></div>
                {/* second */}
          <div className='row hotelcard container-fluid'>
                    <div className='col-lg-4 mt-3 singleimage '>
                    <div id="carouselExampleAutoplaying2" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.gingerhotels.com/resourcefiles/hotel-profile-listing/ginger-chennai-tharamani-iitm-hotel-th-1f.jpg?version=3052024051748" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://static.toiimg.com/photo/36831763.cms" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/65/c3/9d/standard-room.jpg?w=1200&h=-1&s=1" class="d-block w-100" alt="..."/>
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
                <div className='seperator'></div>
                {/* third */}
          <div className='row hotelcard container-fluid'>
                    <div className='col-lg-4 mt-3 singleimage '>
                    <div id="carouselExampleAutoplaying3" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_513,w_5000,h_2812,c_crop,q_80,fl_progressive/w_600,h_337,f_auto,c_fit/le-foliage-by-tgi-bangalore/09_afdzoa" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/293458991.jpg?k=2c6016792ee1aa70f1685067f3f77d58cee8088a3cdaa7e6dea435a6bfb912c0&o=&hp=1" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_423,w_4999,h_2817,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/le-foliage-by-tgi-bangalore/38_dkp6a6" class="d-block w-100" alt="..."/>
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
                    <h2 class="hotelname text-primary">Name:Holiday Inn</h2>
                    <h5>Room Type: Luxury Suite</h5>
                    <h5>Bed Type: Double</h5>
                    <h4 className="text-success" >Room Price: 5500</h4>
                    <h4 className="text-warning">Room Rating: 4.8⭐ </h4>
                    <h6>Room distance: 3kms from Whitefield</h6>
                
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Rooms Booked Successfully!!! Have a Good Stay😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
                    </div>
              

                </div>
                
                {/* four */}
          <div className='row hotelcard container-fluid'>
                    <div className='col-lg-4 mt-3 singleimage '>
                    <div id="carouselExampleAutoplaying4" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-image-of-Ooty-Hotels_5th-dec.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.hotelscombined.com/himg/28/d2/de/leonardo-1124395-201.3_room_O-697525.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cf.bstatic.com/xdata/images/hotel/270x200/206683386.jpg?k=79212725161df0806a010f380757cab05220701c176e91249f2c180745722cc3&o=" class="d-block w-100" alt="..."/>
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
                    <h2 class="hotelname text-primary">Name:KN Residency</h2>
                    <h5>Room Type: Double</h5>
                    <h5>Bed Type: Double</h5>
                    <h4 className="text-success" >Room Price: 4800</h4>
                    <h4 className="text-warning">Room Rating: 4.8 ⭐ </h4>
                    <h6>Room distance: 2kms from Botanical Garden</h6>
                
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Rooms Booked Successfully!!! Have a Good Stay😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
                    </div>
              

                </div>
                <div className='seperator'></div>
                {/* five */}
          <div className='row hotelcard container-fluid'>
                    <div className='col-lg-4 mt-3 singleimage '>
                    <div id="carouselExampleAutoplaying5" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.gingerhotels.com/resourcefiles/hotel-profile-listing/ginger-chennai-tharamani-iitm-hotel-th-1f.jpg?version=3052024051748" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://static.toiimg.com/photo/36831763.cms" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/65/c3/9d/standard-room.jpg?w=1200&h=-1&s=1" class="d-block w-100" alt="..."/>
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
                    <h2 class="hotelname text-primary">Name:Sonu Stays</h2>
                    <h5>Room Type: Double</h5>
                    <h5>Bed Type: Twin</h5>
                    <h4 className="text-success" >Room Price: 3750</h4>
                    <h4 className="text-warning">Room Rating: 3.6⭐ </h4>
                    <h6>Room distance: 2kms from Kilambakkam Bustand</h6>
                
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Rooms Booked Successfully!!! Have a Good Stay😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
                    </div>
              

                </div>
                <div className='seperator'></div>
                {/* six */}
          <div className='row hotelcard container-fluid'>
                    <div className='col-lg-4 mt-3 singleimage '>
                    <div id="carouselExampleAutoplaying6" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_513,w_5000,h_2812,c_crop,q_80,fl_progressive/w_600,h_337,f_auto,c_fit/le-foliage-by-tgi-bangalore/09_afdzoa" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/293458991.jpg?k=2c6016792ee1aa70f1685067f3f77d58cee8088a3cdaa7e6dea435a6bfb912c0&o=&hp=1" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_423,w_4999,h_2817,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/le-foliage-by-tgi-bangalore/38_dkp6a6" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying6" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying6" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className='col-lg-6 mt-3 singlecard'>
                    <h2 class="hotelname text-primary">Name:Estoria Inn</h2>
                    <h5>Room Type: Luxury Suite</h5>
                    <h5>Bed Type: Double</h5>
                    <h4 className="text-success" >Room Price: 5200</h4>
                    <h4 className="text-warning">Room Rating: 4.3 ⭐</h4>
                    <h6>Room distance: 5kms from Kochin Railway Station</h6>
                
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Rooms Booked Successfully!!! Have a Good Stay😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
                    </div>
              

                </div>

                
<div className='seperator'></div>
                {/* seven */}
          <div className='row hotelcard container-fluid'>
                    <div className='col-lg-4 mt-3 singleimage '>
                    <div id="carouselExampleAutoplaying7" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH21033228624570/QS1042/QS1042-Q1/IMG_20221016_112812.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/482669632.jpg?k=c21809cffbc74aba70cdb44af7465b6c6b91216a9c26b5f1647937d639ea5025&o=&hp=1" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH77246258122996/QS1042/QS1042-Q1/IMG20230426000239.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying7" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying7" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className='col-lg-6 mt-3 singlecard'>
                    <h2 class="hotelname text-primary">Name:Paradise Resorts</h2>
                    <h5>Room Type: Double</h5>
                    <h5>Bed Type: Double</h5>
                    <h4 className="text-success" >Room Price: 4200</h4>
                    <h4 className="text-warning">Room Rating: 4.8 ⭐</h4>
                    <h6>Room distance: 2kms from Kochin Railway Station</h6>
                
                                                   
                                <button className=" btn btn-secondary" onClick={()=>{alert("Your Rooms Booked Successfully!!! Have a Good Stay😍")}}>Book Now</button>
                      <Link to ={`/`} > <button className="btn btn-primary ms-2" >Home</button></Link>
                    </div>
              

                </div>
        </>
    );
}
                
      