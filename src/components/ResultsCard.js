import React from "react";

function ResultsCard(props) {
  return (
    <div className="card w-75 m-auto mb-3">
      <div className="card-header">PCR/RAT Test Result</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="fw-bold">Test Date: </span>
          {props.testDate}
        </li>
        <li className="list-group-item">
          <span className="fw-bold">Symptoms: </span>
          {props.symptoms}
        </li>
        <li className="list-group-item">
          <span className="fw-bold">Result: </span>
          {props.result}
        </li>

        <li className="list-group-item">
          <span className="fw-bold">State: </span>
          {props.state}
        </li>
      </ul>
    </div>
  );
}

export default ResultsCard;
