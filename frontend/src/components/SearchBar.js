import React, { Component } from "react";
import { InputBase } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  updateSearchValue,
  getMoviesListFromTMDb
} from "../actions/searchActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = theme => ({
  search: {
    position: "relative",
    borderRadius: "4px 4px 1px 1px",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    },
    border: "solid",
    borderColor: "lightgrey",
    borderWidth: theme.spacing.unit * 0.1,
    boxShadow: "0px 2px 4px #cccccc",
    "&:hover": {
      boxShadow: "0px 0px 0px #aaa"
    },
    height: 45,
    backgroundColor: "white"
  },
  searchIcon: {
    color: "black",
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "black",
    width: "100%",
    height: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: 213,
      "&:focus": {
        width: 313
      }
    }
  }
});

class SearchBar extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const { getMoviesListFromTMDb, actions } = this.props;
    getMoviesListFromTMDb(actions.searchValue, actions.actualPage);
  };

  handleChangeInputValue = event => {
    const { updateSearchValue } = this.props;
    updateSearchValue(event.target.value);
  };

  render() {
    const { classes, actions } = this.props;

    return (
      <div className="SearchBar">
        <form
          className="SearchBar"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <div className={classes.search}>
            <div className={classes.searchIcon} id="AppBarSearchIcon">
              <FontAwesomeIcon icon="search" />
            </div>
            <InputBase
              id="AppBarInputBase"
              placeholder="Movie/Address..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              value={actions.searchValue}
              onChange={this.handleChangeInputValue}
            />
          </div>
        </form>
        {/* {actions.moviesList.length &&
          actions.moviesList.map(movie => <p key={movie.id}>{movie.title}</p>)} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  actions: {
    searchValue: state.search.searchValue,
    actualPage: state.search.actualPage,
    // moviesList: state.search.moviesList,
  }
});

export default connect(
  mapStateToProps,
  {
    updateSearchValue,
    getMoviesListFromTMDb
  }
)(withStyles(styles)(SearchBar));
