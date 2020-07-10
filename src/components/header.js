import React from "react";
import {
  Grid,
  AppBar,
  Typography,
  Toolbar,
  // IconButton,
} from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  return (
    <Grid container direction = 'row'  >
      <AppBar position="static">
        <Toolbar  style = {{alignItems : 'center', justifyContent : 'center', backgroundColor : '#001d77'}}>          
          <Typography variant="h5" style = {{color : 'red'}}>Covid-19 tracker</Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
