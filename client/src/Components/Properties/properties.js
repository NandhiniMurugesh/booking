import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Properties(){
    useEffect(() => {
        AOS.init();
      }, []);
    return(
        <>
     <div className="seperator"></div>
      <h3>Browse By Properties!!!</h3>
      <div className="propertiesContainer row " data-aos="fade-right">
        <div className="col-8 col-md-8 col-sm-8 col-lg-3 mb-4">
          <div className="card propertiescard">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Hotels</h5>
              <h6 className="card-title">188 properties</h6>
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
              <h5 className="card-title">Apartment</h5>
              <h6 className="card-title">78 properties</h6>
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
              <h5 className="card-title">Villa</h5>
              <h6 className="card-title">98 properties</h6>
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
              <h5 className="card-title">Resorts</h5>
              <h6 className="card-title">128 properties</h6>
            </div>
          </div>
        </div>
       
      </div>
      <div className="seperator"></div>
        </>
    );

}