import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function EnterStats() {
  const dateInputRef = useRef();
  const symptomsInputRef = useRef();
  const stateInputRef = useRef();
  const history = useHistory();

  const [radioCheck, setRadioCheck] = useState("positive");

  const handleChange = (event) => {
    setRadioCheck(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const dateEntered = dateInputRef.current.value;
    const symptomsEntered = symptomsInputRef.current.value;
    const stateEntered = stateInputRef.current.value;

    const addCovidData = {
      testDate: dateEntered,
      symptoms: symptomsEntered,
      result: radioCheck,
      state: stateEntered,
    };

    fetch(
      "https://covid-tracker-ad13d-default-rtdb.asia-southeast1.firebasedatabase.app/stats.json",
      {
        method: "POST",
        body: JSON.stringify(addCovidData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/viewstats");
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="row mb-3">
        <label for="inputDate" className="col-sm-2 col-form-label">
          Date of test:
        </label>
        <div className="col-sm-10">
          <input type="text" className="testdate" ref={dateInputRef}></input>
        </div>
      </div>
      <div className="row mb-3">
        <label for="symptoms" className="col-sm-2 col-form-label">
          Symptoms:
        </label>
        <div className="col-sm-10">
          <textarea
            type="text"
            className="symptoms"
            ref={symptomsInputRef}
          ></textarea>
        </div>
      </div>
      <fieldset className="row mb-3">
        <legend className="col-form-label col-sm-2 pt-0">
          PCR/RAT Results:
        </legend>
        <div className="col-sm-10">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios1"
              value="positive"
              checked={radioCheck === "positive"}
              onChange={handleChange}
            ></input>
            <label className="form-check-label" for="gridRadios1">
              Positive
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios2"
              value="negative"
              checked={radioCheck === "negative"}
              onChange={handleChange}
            ></input>
            <label className="form-check-label" for="gridRadios2">
              Negative
            </label>
          </div>
        </div>
      </fieldset>

      <div className="row mb-3">
        <label for="state" className="col-sm-2 col-form-label">
          State:
        </label>
        <div className="col-sm-10">
          <input type="text" className="state" ref={stateInputRef}></input>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default EnterStats;
