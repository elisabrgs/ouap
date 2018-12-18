import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Home from "./components/Home";
import Main from "./components/Main";
import 'typeface-roboto';

//switch to typography v2 in material ui
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

//add fontawesome icons
library.add(faSearch);

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Main}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
