import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Location() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="seperator"></div>
      <h3 className="text-danger-emphasis" data-aos="fade-up">Explore India!!!</h3>
      {/* location card */}
      <div className="locationContainer row" data-aos="fade-up">
        <div className="col-10 col-lg-4 mb-4">
          <div className="card loccard" data-aos="fade-up">
            <Link to={`/hotels`}>
              <img
                src="https://i.ytimg.com/vi/x_Ndx77y1sQ/maxresdefault.jpg"
                className="card-img-top cbeimg"
                alt="..."
              />
            </Link>
            <div className="card-body">
              <h2 className="card-title">Coimbatore</h2>
            </div>
          </div>
        </div>
        <div className="col-10 col-lg-4 mb-4">
          <div className="card loccard" data-aos="fade-up">
            <Link to={`/hotels`}>
              <img
                src="https://swarajya.gumlet.io/swarajya/2022-07/0d636cb3-d14a-4bf4-a833-797583018303/E92dtZ_VgAENEUa.jpg"
                className="card-img-top chnimg"
                alt="..."
              />
            </Link>
            <div className="card-body">
              <h2 className="card-title">Chennai</h2>
            </div>
          </div>
        </div>
        <div className="col-10 col-lg-4 mb-4">
          <div className="card loccard" data-aos="fade-up">
            <Link to={`/hotels`}>
              <img
                src="https://www.godrej-ananda.net.in/images/other/how-bangalore-got-its-name.webp"
                className="card-img-top bangimg"
                alt="..."
              />
            </Link>
            <div className="card-body">
              <h2 className="card-title">Bangalore</h2>
            </div>
          </div>
        </div>
        <div className="col-10 col-lg-4 mb-4">
          <div className="card loccard" data-aos="fade-up">
            <Link to={`/hotels`}>
              <img
                src="https://i.ytimg.com/vi/NeTIVO4vUs0/hqdefault.jpg"
                className="card-img-top kochimg"
                alt="..."
              />
            </Link>
            <div className="card-body">
              <h2 className="card-title">Kochin</h2>
            </div>
          </div>
        </div>
        <div className="col-10 col-lg-4 mb-4">
          <div className="card loccard" data-aos="fade-up">
            <Link to={`/hotels`}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg"
                className="card-img-top kochimg"
                alt="..."
              />
            </Link>
            <div className="card-body">
              <h2 className="card-title">Jaipur</h2>
            </div>
          </div>
        </div>
        <div className="col-10 col-lg-4 mb-4">
          <div className="card loccard" data-aos="fade-up">
            <Link to={`/hotels`}>
              <img
                src="https://keralatravelboutique.com/wp-content/uploads/2015/10/sun-rise-kanyakumari-700x525.jpg"
                className="card-img-top kochimg"
                alt="..."
              />
            </Link>
            <div className="card-body">
              <h2 className="card-title">Kanyakumari</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}





// import React from "react";
// import { Link } from "react-router-dom";
// export function Location(){
//     return(
//         <>
    
  
//       <div className='seperator'></div>
//       <h3>Explore India!!!</h3>
//         {/* location card */}
//         <div  >
//        <table>
//                 <th>  <div class="card loccard " >
//                <Link to={`/hotels`} >      <img src="https://i.ytimg.com/vi/x_Ndx77y1sQ/maxresdefault.jpg" class="card-img-top" alt="..."/> </Link>
//                           <div class="card-body">
//                               <h2 class="card-title">Coimbatore</h2>
                           
                              
//                             </div>
//                   </div>
//                   </th>
       
//                <th>   <div class="card loccard " >
//                <Link to={`/hotels`} ><img src="https://swarajya.gumlet.io/swarajya/2022-07/0d636cb3-d14a-4bf4-a833-797583018303/E92dtZ_VgAENEUa.jpg" class="card-img-top" alt="..."/> </Link>
//                           <div class="card-body">
//                               <h2 class="card-title">Chennai</h2>
                           
                              
//                             </div>
//                   </div>
//                   </th>

//                 <th> <div class="card loccard " >
//                <Link to={`/hotels`} >      <img src="https://www.godrej-ananda.net.in/images/other/how-bangalore-got-its-name.webp" class="card-img-top" alt="..."/> </Link>
//                           <div class="card-body">
//                               <h2 class="card-title">Bangalore</h2>
                           
                              
//                             </div>
//                   </div>
//                   </th>
     
//                 <th>  <div class="card loccard " >
//                <Link to={`/hotels`} >      <img src="https://i.ytimg.com/vi/NeTIVO4vUs0/hqdefault.jpg" class="card-img-top" alt="..."/> </Link>
//                           <div class="card-body">
//                               <h2 class="card-title">Kochin</h2>
                           
                              
//                             </div>
//                   </div>
//                   </th>
               
//                   </table>
//                   </div>
//    </>
//     );
// }