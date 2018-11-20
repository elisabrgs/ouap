import React, { Component } from "react";
import logo from "../assets/logo.svg";
import "./Home.css";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SearchBar from "./SearchBar";

const styles = theme => ({
  header: {
    paddingTop: "10px"
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="Home">
        <header className={classes.header}>
          <Grid container alignItems="center" justify="center" spacing={16}>
            <Grid item xs={8}>
              <Typography variant="h3" align="left">
                Discover where your favorite movies have been shot around the
                world with{" "}
              </Typography>
              <Typography variant="h2" align="left">
                Once Upon a Place
              </Typography>
            </Grid>
            <Grid item>
              <img src={logo} className="logo" alt="logo" />
            </Grid>
          </Grid>
        </header>
        <div>
          <Grid
            container
            justify="center"
            direction="row"
            alignItems="center"
            spacing={16}
          >
            <Grid item xs={8} md={5}>
              <SearchBar />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
