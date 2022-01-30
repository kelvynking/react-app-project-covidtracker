import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CovidCard from "./CovidCard";

function Home() {
  const [getData, setGetData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://covid-19-data.p.rapidapi.com/report/country/code?date=2020-04-01&code=au",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key":
            "1de65fd4dcmsh1d9c530d04ab73bp127509jsn52b43fc85331",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const results = data[0].provinces;
        console.log(results);
        // for (const result of results) {
        //   console.log(result);
        //   const array = Object.values(result);
        //   console.log(array);
        //   const iterator = array.values();

        //   for (const value of iterator) {
        //     console.log(value);
        //   }
        // }
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
    <div>
      <div class="row row-cols-3">
        {getData.map((data) => (
          <CovidCard
            key={data.province}
            province={data.province}
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
