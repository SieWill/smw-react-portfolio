import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Auth from "./pages/auth";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioManager from "./pages/portfolio-manager";
import PortfolioDetail from "./portfolio/portfolio-detail";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
    };

    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN",
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
    });
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
    });
  }

  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
        withCredentials: true,
      })
      .then((response) => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        //if loggedIn and the status is LOGGED_IN => return data
        //if loggedIn status NOT_LOGGED_IN => update state
        //if not loggedIn and status LOGGED_IN => update state to LOGGED_OUT

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
          });
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [<Route path="/portfolio-manager" component={PortfolioManager} />];
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer
              loggedInStatus={this.state.loggedInStatus}
              handleSuccessfulLogout={this.handleSuccessfulLogout}
            />

            <h2>{this.state.loggedInStatus}</h2>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route
                path="/auth"
                render={(props) => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              />
              <Route path="/contact" component={Contact} />
              {this.state.loggedInStatus === "LOGGED_IN"
                ? this.authorizedPages()
                : null}
              <Route path="/blog" component={Blog} />
              <Route
                exact
                path="/portfolio/:slug"
                component={PortfolioDetail}
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

//why do we use props? what is a state in react?