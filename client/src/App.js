import React, { Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavigationBar from './components/Navbar';
import NewUser from './pages/NewUser';
import Gallery from './pages/Gallery';
import Wrapper from './components/Wrapper';
import NoMatch from './components/NoMatch';
import ExistingUser from './pages/ExistingUser'
// import axios from 'axios';
// import SignUp from './components/SignUp';


class App extends Component {
  state = {}

 //this is what is rendered on the front end 
  render() {
    return (
      
      <React.Fragment>
        <NavigationBar/>
        <Wrapper>
        <Router>
        <Switch>
          <Route exact path ="/" component = {Home} />
          <Route exact path ="/SignIn" component = {ExistingUser} />
          <Route exact path = "/SignUp" component = {NewUser}/>
          <Route exact path ="/Matches" component = {Gallery} />
          <Route exact path ="/About" component = {About} />
          <Route exact path ="/Contact" component = {Contact} />
          <Route component= {NoMatch} />
        </Switch>
        </Router>
        </Wrapper>
      </React.Fragment>
     
    );
  }
}


export default App;
