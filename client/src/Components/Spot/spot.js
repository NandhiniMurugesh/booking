import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faBicycle, faHeart, faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Spot() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
      <div className="seperator"></div>
      <h3 className="text-light" data-aos="fade-down">Easy Trip Planner!!!</h3>
  
      <div className=" tripplanner ">
           <button className="btn btn-outline-light">  <FontAwesomeIcon icon={faUmbrellaBeach} />  Beach</button> 
           <button className="btn btn-outline-light ms-2">   <FontAwesomeIcon icon={faHeart} />  Romance</button> 
           <button className="btn btn-outline-light ms-2">   <FontAwesomeIcon icon={faBicycle} />  Outdoor</button> 
              </div>
              <div className="seperator"></div>
      <div className="spotContainer row " data-aos="fade-down">
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card spotcard" data-aos="fade-down">
            <img
              src="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/avalanche-hills-ooty-1656333416_e2680b8680086972e69d.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Ooty</h5>
              <h6 className="card-title">88kms from Coimbatore</h6>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card spotcard" data-aos="fade-down">
            <img
              src="https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/dharmapuri-1654194392_6e3e3cdfdd3337059dd5.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Hogenakkal</h5>
              <h6 className="card-title">78kms from Bangalore</h6>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card spotcard" data-aos="fade-down">
            <img
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2017/05/rsz_pondicherry_cover_kb_920506.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Pondicherry</h5>
              <h6 className="card-title">98kms from Chennai</h6>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card spotcard" data-aos="fade-down">
            <img
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/03/cover6.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Thrissur</h5>
              <h6 className="card-title">98kms from Kochin</h6>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card spotcard" data-aos="fade-down">
            <img
              src="https://images.squarespace-cdn.com/content/v1/63d13e0c40f3902347869bee/4f7fd5cd-3d03-4ad6-aaf8-fc51a56be8d1/Phoenix-Mall+enhanced.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Phoenix Mall</h5>
              <h6 className="card-title">18kms from Chennai</h6>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card spotcard" data-aos="fade-down">
            <img
              src="https://www.karnataka.com/wp-content/uploads/2010/09/bangalore-palace-main-entrance-1280x720.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Mysore Palace</h5>
              <h6 className="card-title">68kms from Bangalore</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="seperator"></div>
     
    </>
  );
}




// import React from "react";
// export function Spot(){
//     return(
//         <>
    
  
//       <div className='seperator'></div>
//       <h3>Easy Trip Planner!!!</h3>
// <div>
//     <table>
//         <th>
//         <div class="card spotcard " >
//               <img src="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/avalanche-hills-ooty-1656333416_e2680b8680086972e69d.webp" class="card-img-top" alt="..."/> 
//                           <div class="card-body">
//                           <h5 class="card-title">Ooty</h5>
//                               <h6 class="card-title">88kms from Coimbatore</h6>
                           
                              
//                             </div>
//                   </div>
//         </th>
//         <th>
//         <div class="card spotcard " >
//               <img src="https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/dharmapuri-1654194392_6e3e3cdfdd3337059dd5.webp" class="card-img-top" alt="..."/> 
//                           <div class="card-body">
//                               <h5 class="card-title">Hogenakkal</h5>
//                               <h6 class="card-title">78kms from Bangalore</h6>
                           
                              
//                             </div>
//                   </div>
//         </th>
//         <th>
//         <div class="card spotcard " >
//               <img src="https://s3.india.com/travel/wp-content/uploads/2015/04/Pondicherry_Pondicherry_Beach-at-Pondicherry.jpg" class="card-img-top" alt="..."/> 
//                           <div class="card-body">
//                           <h5 class="card-title">Pondicherry</h5>
//                               <h6 class="card-title">98kms from Chennai</h6>
                           
                              
//                             </div>
//                   </div>
//         </th>
//         <th>
//         <div class="card spotcard " >
//               <img src="https://www.holidify.com/images/cmsuploads/compressed/Shoba_City_Mall,_Thrissur,_Kerala_20190530041833.jpeg" class="card-img-top" alt="..."/> 
//                           <div class="card-body">
//                           <h5 class="card-title">Thrissur</h5>
//                               <h6 class="card-title">98kms from Kochin</h6>
                           
                              
//                             </div>
//                   </div>
//         </th>
       
        
//     </table>
// </div>
// <div className="seperator"></div>
//    </>
//     );
// }