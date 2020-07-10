import React from "react";
import { Grid, Container } from "@material-ui/core";
import Header from "./components/header.js";
import GlobalData from './components/globalData/globalData.js';
import Background from './resources/C19Virus.jpg';




const App = () => {
  
  return (
    <Grid container direction = 'column' alignItems = 'center' >
      <Grid item sm={12} md = {6} style = {{backgroundImage : `url(${Background})` , backgroundRepeat : 'no-repeat' , backgroundSize : 'cover', backgroundPosition : 'center'}}
>
        <Header />
        <GlobalData/>
      </Grid>
    </Grid>
  );
};

export default App;
