import React, { useEffect, useState } from "react";
import { covidCountryData } from "../../api";
import CountUp from "react-countup";
import "./countrydata.css";
import CountryChart from "./countryChart.js";

import {
  Grid,
  Paper,
  Typography,
  Select,
  FormControl,
  FormHelperText,
  MenuItem,
  InputLabel,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

let countryData = {
  confirmed: 0,
  recovered: 0,
  deaths: 0,
};
let Name = [];

const CountryData = () => {
  useEffect(() => {
    const calldata = async () => {
      setCountry(await covidCountryData());
    };

    calldata();
  }, []);

  const classes = useStyles();

  const [country, setCountry] = useState([]);
  const [name, setName] = useState("");
  // const [selectionData, setSelectionData] = useState({});

  const handleChange = (e) => {
    setName(e.target.value);
    Name.push(e.target.value);
  };

  const Responser = () => {
    // ****** always one step behind ***************
    // if (name !== "") {
    //   const CountryData = country.filter((country) => country.name === name);
    //   setSelectionData(CountryData);

    // }

    // ****** use this method to counter ***************

    for (var i = 0; i < country.length; i++) {
      if (country[i].name === Name[0]) {
        countryData = {
          name: country[i].name,
          confirmed: country[i].confirmed,
          recovered: country[i].recovered,
          deaths: country[i].deaths,
        };
      }
    }

    Name = [];
  };

  console.log(name);
  console.log(countryData);

  return (
    <div style={{ padding: 5 }}>
      <div className="heading">
        <Typography>Search by country</Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="_confirmed">
          <div>
            <Typography> Infected </Typography>
          </div>
          <div className="_icon_infected"></div>
          <div>
            <CountUp
              start={0}
              end={countryData.confirmed}
              duration={3}
              separator=","
            />
          </div>
        </div>
        <div className="_recovered">
          <div>
            <Typography> Recovered </Typography>
          </div>
          <div className="_icon_recovered"></div>
          <div>
            <CountUp
              start={0}
              end={countryData.recovered}
              duration={3}
              separator=","
            />
          </div>
        </div>
        <div className="_deaths">
          <div>
            <Typography>Deaths</Typography>
          </div>
          <div className="_icon_death"></div>
          <div>
            <CountUp
              start={0}
              end={countryData.deaths}
              duration={3}
              separator=","
            />
          </div>
        </div>
      </div>
      <div className="_chart">
        <CountryChart data={countryData} />
      </div>
      <div className="_containerSearch">
        <Typography>Select country</Typography>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">country name</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={name}
            onChange={handleChange}
            onClick={Responser}
          >
            {country.map((data, index) => (
              <MenuItem value={data.name} key={index}>
                {data.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default CountryData;
