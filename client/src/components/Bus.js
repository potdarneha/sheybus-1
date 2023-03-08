import React from "react";
import { useNavigate } from "react-router-dom";

function Bus({ bus }) {
  const navigate = useNavigate();
  return (
    <div className="card p-2">
    <h1 className="text-lg primary-text">{bus.name}</h1>
    <hr />
    <div className="d-flex flex-wrap justify-content-between">
      <div className="mb-2">
        <p className="text-sm">From</p>
        <p className="text-sm">{bus.from}</p>
      </div>
  
      <div className="mb-2">
        <p className="text-sm">To</p>
        <p className="text-sm">{bus.to}</p>
      </div>
  
      <div className="mb-2">
        <p className="text-sm">Fare</p>
        <p className="text-sm">$ {bus.fare} /-</p>
      </div>
  
      <div className="mb-2">
        <p className="text-sm">Journey Date</p>
        <p className="text-sm">{bus.journeyDate}</p>
      </div>
  
      <div className="mb-2">
        <h1 className="text-lg underline secondary-text" onClick={()=>{
            navigate(`/book-now/${bus._id}`)
        }}>Book Now</h1>
      </div>
    </div>
    <hr />
  </div>
  );
}

export default Bus;
