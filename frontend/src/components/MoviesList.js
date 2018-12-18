import React, { Component } from "react";
import { connect } from "react-redux";

class MoviesList extends Component {
  render() {
    const { actions } = this.props;
    if (actions.moviesList.length) {
      return (
        <div class="MoviesList">
          {actions.moviesList.map(movie => (
            <p key={movie.id}>{movie.title}</p>
          ))}
        </div>
      );
    } else {
      return (
        <div class="MoviesList">
          <p>Nothing to display</p>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  actions: {
    moviesList: state.search.moviesList
  }
});

export default connect(
  mapStateToProps,
  null
)(MoviesList);
