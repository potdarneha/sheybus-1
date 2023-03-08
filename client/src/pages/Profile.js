import React from "react";
import "./profile.css";

function Profile() {
  return (
    <div className="p-4">
      <div className="container my-4 bg-light">
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">About Sleeper Bus</h2>
            <p className="lead">
              {" "}
              Therefore, the availability of reliable travel time forecasting is
              a relevant attribute for transit operators [6,7,8,9,10] to use
              when designing or updating service timetables.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRCGAVTosyZkNeTOLezr3PLom3qFQmLsoXOQ&usqp=CAU"
              className="img-fluid class="
              bd-placeholder-img
              bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
              width="400"
              height="400"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="container my-4 bg-light">
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7 order-md-1">
            <h2 className="featurette-heading fw-normal lh-1">About Private Bus</h2>
            <p className="lead">
              {" "}
              Travel time plays a key role in assuring the reliability and
              quality of service in a transit system. The use of this variable
              ranges from operation planning to service monitoring .
            </p>
          </div>
          <div className="col-md-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAEdnBCWki3mwb4-ClSMnMH3JEaqVT48ia4g&usqp=CAU"
              className="img-fluid class="
              bd-placeholder-img
              bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
              width="400"
              height="400"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="container my-4 bg-light">
        <div className="row featurette d-flex justify-content-center align-items-center">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">About Local Bus</h2>
            <p className="lead">
              {" "}
              Moreover, in large historical cities the influence of traffic
              congestion on travel time variability has been pointed out. It is
              linked, to the city structure and freight vehicles travelling into
              the city.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQidLbGhClkhQztlNeqKQnwGoGQYtA-0hswCg&usqp=CAU"
              className="img-fluid class="
              bd-placeholder-img
              bd-placeholder-img-lg
              featurette-image
              img-fluid
              mx-auto
              width="400"
              height="400"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="..."
            />
          </div>
        </div>
      </div>


      <div className="promise-head-main text-center p-5"><h1> We promise to deliver</h1></div>

      <div className="card-group p-2">
      <div className="card">
          <div className="card profile-card-1">
            
            <img
              src="https://s2.rdbuz.com/web/images/home/benefits.png"
              alt="profile-image"
              className="profile"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center "> UNMATCHED BENEFITS</h5>
            <p className="card-text">
            We take care of your travel beyond ticketing by providing you with innovative and unique benefits.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card profile-card-1">
            
            <img
              src="	https://s1.rdbuz.com/web/images/home/customer_care.png"
              alt="profile-image"
              className="profile h-50"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center "> CUSTOMER SERVICE</h5>
            <p className="card-text">
              We put our experience and relationships to good use and are
              available to solve your travel issues.
            </p>
          </div>
        </div>
        
        <div className="card">
          <div class="card profile-card-1">
            
            <img
              src="https://s1.rdbuz.com/web/images/home/lowest_Fare.png"
              alt="profile-image"
              className="profile"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center "> LOWEST PRICES</h5>
            <p className="card-text">
            We always give you the lowest price with the best partner offers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
