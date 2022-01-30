import React from "react";

function CovidCard(props) {
  return (
    <div>
      <div class="col">
        <div className="card">
          <img src="logo192.png" className="card-img-top" alt="logo" />
          <div className="card-body">
            <p className="card-text">State: {props.province}</p>
            <p className="card-text">Confirmed: {props.confirmed}</p>
            <p className="card-text">Deaths: {props.deaths}</p>
            <p className="card-text">Recovered: {props.recovered}</p>
            <p className="card-text">Active: {props.active}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CovidCard;
