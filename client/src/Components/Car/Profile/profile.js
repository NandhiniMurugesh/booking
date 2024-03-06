import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";

export function Profile(){
    return(
        <>
        <div className="profilecard text-center">
                <h3>Please Register First and Try Login!!</h3>
                <h2>You can update Your Profile once you Logged in🙂</h2>
                <div className="seperator"></div>
           <Link to={`/register`} >    <button className="btn btn-primary">Register</button></Link>
        </div>
        </>
    );
}