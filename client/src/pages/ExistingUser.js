import React, { Component} from "react";
import {Button, Container} from 'react-bootstrap'
import API from "../utils/API";
import { Col, Row} from "../components/Grid";


class ExistingUser extends Component {
  state = {
    email: "",
    password: "",
    username: ""
  };

  componentWillMount() {
  console.log("great");
    
  }

  handleInputChange = event => {
     const { name, value } = event.target;
      this.setState({
      [name]: value});
  };


 
  getUsername = () => {
    this.props.history.push ("/matches")
    alert("Welcome Back..." + this.state.username + " Let's see your matches for today")
    
};


handleformSubmit = (event) => {
  event.preventDefault();
  API.getThisUser({
    email: this.state.email,
    password: this.state.password,
    username: this.state.username,
  }).then(() => this.getUsername())
  .catch(err => { throw err });
};


  render() {
    return (
    <Container fluid>
    <Row>
          <Col size="md-6">



       <form>
<Row>
  <Col size="md-6">
  <label> Email: <input name="email" type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange}/> </label>
              
  </Col>

  <Col size="md-6">
    <label> Password: <input name="password" type="password" minLength="8" maxLength="8" placeholder="Password"  value={this.state.password}
          onChange={this.handleInputChange}/></label>
 
  </Col>
  </Row>
  <Button variant="primary" type="submit" onClick={this.handleformSubmit}>
    SignIn
  </Button>
   
</form>
       </Col></Row>     </Container>
    );
  }
}

export default ExistingUser;