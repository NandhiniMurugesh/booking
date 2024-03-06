import React from "react";
import { Link } from "react-router-dom";
export function Location(){
    return(
        <>
    
  
      <div className='seperator'></div>
      <h3>Explore India!!!</h3>
        {/* location card */}
        <div  >
       <table>
                <th>  <div class="card loccard " >
               <Link to={`/hotels`} >      <img src="https://i.ytimg.com/vi/x_Ndx77y1sQ/maxresdefault.jpg" class="card-img-top" alt="..."/> </Link>
                          <div class="card-body">
                              <h2 class="card-title">Coimbatore</h2>
                           
                              
                            </div>
                  </div>
                  </th>
       
               <th>   <div class="card loccard " >
               <Link to={`/hotels`} ><img src="https://swarajya.gumlet.io/swarajya/2022-07/0d636cb3-d14a-4bf4-a833-797583018303/E92dtZ_VgAENEUa.jpg" class="card-img-top" alt="..."/> </Link>
                          <div class="card-body">
                              <h2 class="card-title">Chennai</h2>
                           
                              
                            </div>
                  </div>
                  </th>

                <th> <div class="card loccard " >
               <Link to={`/hotels`} >      <img src="https://www.godrej-ananda.net.in/images/other/how-bangalore-got-its-name.webp" class="card-img-top" alt="..."/> </Link>
                          <div class="card-body">
                              <h2 class="card-title">Bangalore</h2>
                           
                              
                            </div>
                  </div>
                  </th>
     
                <th>  <div class="card loccard " >
               <Link to={`/hotels`} >      <img src="https://i.ytimg.com/vi/NeTIVO4vUs0/hqdefault.jpg" class="card-img-top" alt="..."/> </Link>
                          <div class="card-body">
                              <h2 class="card-title">Kochin</h2>
                           
                              
                            </div>
                  </div>
                  </th>
               
                  </table>
                  </div>
   </>
    );
}