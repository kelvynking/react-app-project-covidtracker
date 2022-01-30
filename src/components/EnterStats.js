import React from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

function EnterStats() {
  const dateInputRef = useRef();
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const dateEntered = dateInputRef.current.value;

    const addCovidData = {
      testDate: dateEntered,
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
      <label>
        Date of test:
        <input type="text" name="testdate" ref={dateInputRef}></input>
      </label>
      <button type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
}

export default EnterStats;
