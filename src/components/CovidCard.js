import React from "react";
import { FLAGS } from "../flags";

function CovidCard(props) {
  const findImage = (province) => {
    const record = FLAGS.find((data) => data.name === province);

    if (record) return record.img;
    else return "Australia_flag.png";
  };
  return (
    <div>
      <div className="col">
        <div className="card">
          <img
            src={findImage(props.province)}
            className="card-img-top"
            alt="logo"
          />
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
