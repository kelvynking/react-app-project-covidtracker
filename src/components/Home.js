import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CovidCard from "./CovidCard";

function Home() {
  const [getData, setGetData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    var todayDate = new Date().toISOString().slice(0, 10);
    console.log(todayDate);
    fetch(
      `https://covid-19-statistics.p.rapidapi.com/reports?iso=AUS&date=${todayDate}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
          "x-rapidapi-key":
            "1de65fd4dcmsh1d9c530d04ab73bp127509jsn52b43fc85331",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const results = data.data;
        setGetData(results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (isLoading) {
    return <div>Hang on tight ...</div>;
  }

  return (
    <div className="container p-3">
      <div className="row row-cols-3 g-2">
        {getData.map((data) => (
          <CovidCard
            key={data.region.province}
            province={data.region.province}
            confirmed={data.confirmed}
            deaths={data.deaths}
            recovered={data.recovered}
            active={data.active}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
