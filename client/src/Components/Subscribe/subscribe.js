import React from "react";
// import {Card} from 'flowbite-react';

// import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

export function Subscribe() {
  return (
   <div className="subscribeMain">
   <div className=' container'>
  <h3 className="text-center">Save time, Save Money!</h3>
  <div className="row justify-content-center align-items-center">
    <div className="col-md-6 col-lg-4 mt-5">
      <input type="text" className="form-control" placeholder="Email" id="email" required />
    </div>
    <div className="col-md-6 col-lg-4 mt-5">
      <button onClick={() => { alert("You are Subscribed Now... We will Notify about the deals!"); }} className="btn btn-primary w-50">Subscribe</button>
    </div>
  </div>
</div>
</div>
  );
}
