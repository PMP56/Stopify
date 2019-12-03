import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/navigation.jsx";
import Body from "./components/body.jsx";
import Footer from "./components/footer.jsx";
import NavBar from "./components/nav_bar.jsx";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Body />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
