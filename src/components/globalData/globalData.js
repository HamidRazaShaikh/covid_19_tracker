import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

import "./globalData.css";

import { covidData } from "../../api";
import CountUp from "react-countup";
import Chart from "./chart.js";
import CountryData from "../countrydata/countrydata.js";

import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     margin: 50,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

const GlobalData = () => {
  const [Data, setData] = useState({
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    lastUpdate: "",
  });

  // const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const data = await covidData();

      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="marquee">
        <marquee className="marquee_text">
          This data was updated on {Data.lastUpdate}
        </marquee>
      </div>
      <div style={{ padding: 10, margin: 5 }}>
        <div className="caption">
          <Typography>Global Statistics</Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="confirmed">
            <div>
              <Typography> Infected </Typography>
            </div>
            <div className="icon_infected"></div>
            <div>
              <CountUp
                start={0}
                end={Data.confirmed}
                duration={2.5}
                separator=","
              />
            </div>
          </div>
          <div className="recovered">
            <div>
              <Typography> Recovered </Typography>
            </div>
            <div className="icon_recovered"></div>
            <div>
              <CountUp
                start={0}
                end={Data.recovered}
                duration={2.5}
                separator=","
              />
            </div>
          </div>
          <div className="deaths">
            <div>
              <Typography> Dead</Typography>
            </div>
            <div className="icon_death"></div>
            <div>
              <CountUp
                start={0}
                end={Data.deaths}
                duration={2.5}
                separator=","
              />
            </div>
          </div>
        </div>
        <div className="chart">
          <Chart data={Data} />
        </div>
        <div>
          <CountryData />
        </div>
      </div>
    </div>
  );
};

export default GlobalData;
