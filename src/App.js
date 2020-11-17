import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Matt Stalzer",
      headerLinks: [
        {title: "Home", path: "/"},
        {title: "Portfolio", path: "/portfolio"},
        {title: "Contact Me", path: "/contact"},
        {title: "About Me", path: "/about"}
      ],
      home: {
        title: "Welcome",
        subtitle: "Thank you for visiting my site",
        text: "Click on images below to see my Git Hub, Resume, and LinkedIn"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Contact Me"
      },
      portfolio: {
        title: "Portfolio",
        subtitle: "click on the images below to learn more about each project"
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Matt Staler</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title} />} />
          
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
