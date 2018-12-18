import React, { Component } from "react";
// import logo from "../assets/logo.svg";
import "./Home.css";
// import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MainAppBar from "./MainAppBar";
import MoviesList from "./MoviesList";

const styles = theme => ({
  header: {
    paddingTop: "10px"
  }
});

class Main extends Component {
  render() {
    //const { classes } = this.props;

    return (
      <div className="Main">
        <MainAppBar/>
        <MoviesList/>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
