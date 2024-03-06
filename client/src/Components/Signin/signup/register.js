import React from "react";
import axios from "axios";

export function Registration() {
  

  return (
    <>
 
    <div className="regform">
      <div className="container text-center w-75 p-5">
        <h2 className="text-decoration-underline">USER REGISTRATION</h2>
        <form onSubmit={()=>{alert("You have Registered Successfully!!!")}}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="First Name" id="fname" required />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Last Name" id="lname" required />
          </div>
          
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Phone Number" id="phoneno" required />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Email" id="email" required />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Username" id="username" required />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" id="password" required />
          </div>
          <div className="mb-3">
            <input type="submit" className="btn btn-primary" value="Submit" />
          </div>
        </form>
      
      </div>
      </div>
    </>
  );
}

