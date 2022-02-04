import React, { useEffect, useState } from "react";
import ResultsCard from "./ResultsCard";

function ViewStats() {
  const [getStats, setGetStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://covid-tracker-ad13d-default-rtdb.asia-southeast1.firebasedatabase.app/stats.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const resultsArray = [];

        for (const key in data) {
          const resultObj = {
            id: key,
            ...data[key],
          };
          resultsArray.push(resultObj);
        }
        setGetStats(resultsArray);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Fetching your results.</div>;
  }
  return (
    <div className="container p-3">
      <h1>PCR/RAT Test Results Data: </h1>
      {getStats.map((result) => (
        <ResultsCard
          key={result.id}
          result={result.result}
          symptoms={result.symptoms}
          testDate={result.testDate}
          state={result.state}
        />
      ))}
    </div>
  );
}

export default ViewStats;
