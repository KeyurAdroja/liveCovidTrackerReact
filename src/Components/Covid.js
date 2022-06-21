import React, { useEffect, useState } from "react";
import "./covid.css";

export const Covid = () => {

    const [data,setData]=useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");

      const actualData = await res.json();

      setData(actualData.statewise[0]);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <section>
    <>
      <center>
        <h1>🔴LIVE</h1>
        <h2>
          <u>COVID19 CORNA TRACKING APP</u>
        </h2>
      </center>
      <div className="row">
        <div className="column">
          <div className="card1">
            <h2>
              <span>OUR</span>&nbsp;COUNTRY
            </h2>
            <h1>INDIA</h1>
          </div>
        </div>

        <div className="column">
          <div className="card2">
            <h2>
              <span>TOTAL</span>&nbsp;RECOVERED
            </h2>
            <h1>{data.recovered}</h1>
          </div>
        </div>

        <div className="column">
          <div className="card3">
            <h2>
              <span>TOTAL</span>&nbsp;CONFIRMED
            </h2>
            <h1>{data.confirmed}</h1>
          </div>
        </div>

        <div className="column">
          <div className="card4">
            <h2>
              <span>TOTAL</span>&nbsp;DEATH
            </h2>
            <h1>{data.deaths}</h1>
          </div>
        </div>

        <div className="column">
          <div className="card5">
            <h2>
              <span>TOTAL</span>&nbsp;ACTIVE
            </h2>
            <h1>{data.active}</h1>
          </div>
        </div>

        <div className="column">
          <div className="card6">
            <h2>
              <span>LAST</span>&nbsp;UPDATE
            </h2>
            <h1>{data.lastupdatedtime}</h1>
          </div>
        </div>
      </div>
    </>
    </section>
  );
};
