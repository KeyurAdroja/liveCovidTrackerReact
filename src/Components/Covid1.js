import React, { useState } from "react";
import { useEffect } from "react";

export const Covid1 = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    setData(actualData.statewise[0]);
  };
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <section>
      <div>
        {" "}
        <h1>recovered</h1>
        <h2>{data.recovered}</h2>
        <hr></hr>
        <h1>Active</h1>
        <h2>{data.active}</h2>
      </div>
    </section>
  );
};
