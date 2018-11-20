import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Home from "./components/Home";

//switch to typography v2 in material ui
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

//add fontawesome icons
library.add(faSearch)

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Route exact path="/" component={Home} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
