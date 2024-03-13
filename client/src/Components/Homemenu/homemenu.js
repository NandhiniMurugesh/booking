import React from "react";

export function Homemenu(){
   
    return(
        <>

<nav class="navbar navbar-expand-lg  navbg">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="/">Booking.com</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/register">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/profile">Profile</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

{/* 
<nav className="navbar navbar-expand-lg navbg">
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div className="container-fluid">
  <a className="navbar-brand text-white" href="/">Booking.com</a>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/register">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/profile">Profile</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav> */}
</>
);
}