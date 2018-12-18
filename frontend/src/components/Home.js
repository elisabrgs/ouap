import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
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
    const { classes, actions } = this.props;
    if (!actions.redirectToMainPage) {
      return (
        <div className="Home">
          <header className={classes.header}>
            <Grid container alignItems="center" justify="center" spacing={16}>
              <Grid item xs={8}>
                <Typography variant="h4" align="left">
                  Discover where your favorite movies have been shot around the
                  world with{" "}
                </Typography>
                <Typography variant="h3" align="left">
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
    } else {
      return <Redirect to="/movies" />;
    }
  }
}

const mapStateToProps = state => ({
  actions: {
    redirectToMainPage: state.search.redirectToMainPage
  }
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Home));

