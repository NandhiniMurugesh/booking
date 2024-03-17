import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Topproperties() {
    
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
      
      <h3 className="text-light" data-aos="fade-left">Check Out our Top Rated Properties</h3>
      <div className="toppropertiesContainer row " data-aos="fade-left">
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card toppropertiescard" data-aos="fade-left">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSli8Wuus9Pc9YsiK3KlcdG3IM6tG3W4hqFUw&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">MJ Resorts</h5>
              <h6 className="card-title">4.7 ⭐</h6>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card toppropertiescard" data-aos="fade-left">
            <img
              src="https://watermark.lovepik.com/photo/20211119/large/lovepik-five-star-hotels-in-tourism-picture_500209416.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Taj Hotels</h5>
              <h6 className="card-title">4.5 ⭐</h6>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card toppropertiescard" data-aos="fade-left">
            <img
              src="https://jodhpur.indanahotels.com/images/8a90795f4869dc2813568a62f16e3558.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Aman Resort</h5>
              <h6 className="card-title">4.0 ⭐</h6>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card toppropertiescard" data-aos="fade-left">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2BhuP4moPzAJhRFoYi4h4UnrvskN_mGqPo1G2nNpldUAfUCylItK-f8bbowJPvFc8I0Y&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Luxury Resort</h5>
              <h6 className="card-title">4.6 ⭐</h6>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card toppropertiescard" data-aos="fade-left">
            <img
              src="https://prestigiousvenues.com/wp-content/uploads/2017/03/Venue-For-Events-In-Kerala-The-Zuri-Kumarakom-Prestigious-Venues.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Shiju Resorts</h5>
              <h6 className="card-title">4.8 ⭐</h6>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card toppropertiescard" data-aos="fade-left">
            <img
              src="https://www.laalliancetravel.com/images/travel/attraction/mysore-palace.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Sunset Hotels</h5>
              <h6 className="card-title">4.9 ⭐</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="seperator"></div>

      <h3 className="text-light" data-aos="fade-up-right">Guests Loves these Stays</h3>
      <div className="toppropertiesContainer row " data-aos="fade-up-right">
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card toppropertiescard" data-aos="fade-up-right">
            <img
              src="https://mygate.com/wp-content/uploads/2023/03/51.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Riya Apartments</h5>
              <h6 className="card-title">4.7 ⭐</h6>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card toppropertiescard" data-aos="fade-up-right">
            <img
              src="https://content.domu.com/styles/global_webp/s3/c-banner-images/luxury%20apartments%20chicago.jpg.webp?VersionId=8_1s40HPgaiILP7PI7SyFE3UaYELuMRJ&itok=nvhmahfH"
              // src="https://www.sobha.com/blog/wp-content/uploads/2022/12/luxury-apartments-in-bangalore-for-sale-top-image-Sobha-Arena-1-800x400.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Jk Apartment</h5>
              <h6 className="card-title">4.5 ⭐</h6>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card toppropertiescard" data-aos="fade-up-right">
            <img
              // src="https://www.sobha.com/blog/wp-content/uploads/2023/11/benefits-of-living-in-luxury-apartments.png"
              src="https://5.imimg.com/data5/SELLER/Default/2023/12/371822434/VG/CO/WO/163994486/luxury-flats-250x250.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Dark Apartments</h5>
              <h6 className="card-title">4.0 ⭐</h6>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card toppropertiescard" data-aos="fade-up-right">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnculIm6vJrBZOaouBD-ogXeom-QaAJub5MmISVBZy1tNUNvo_x9UvsErH7iVgxCgB66w&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Global Villas</h5>
              <h6 className="card-title">4.6 ⭐</h6>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card toppropertiescard" data-aos="fade-up-right">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvb_U5MU_NC7mGQ7zK_zeLXEPuusfgF3tjA&usqp=CAU"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Xteci Villas</h5>
              <h6 className="card-title">4.8 ⭐</h6>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-2 mb-4">
          <div className="card toppropertiescard" data-aos="fade-up-right">
            <img
              src="https://muppaprojects.com/wp-content/uploads/2019/02/why-villas-in-hyderabad-are-an-attractive-investment-destination-real-estate.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Moon Villas</h5>
              <h6 className="card-title">4.9 ⭐</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="seperator"></div>
    </>
  );
}
