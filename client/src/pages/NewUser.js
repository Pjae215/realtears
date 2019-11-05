import React, { Component} from "react";
import {Button} from 'react-bootstrap'
import API from "../utils/API";
import { Col, Row, Container} from "../components/Grid";

class NewUser extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    email: "",
    password: "",
    gender: "",
    username: "",
    age: "",
    zipcode: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value
  
    });
  };

  getUserName = () => {
      this.props.history.push ("/matches")
      alert("Thanks for joining " + this.state.username + " Let's you find some matches")
  };


  handleformSubmit = (event) => {
    event.preventDefault();
    this.handleRecordsSave();
  };

  handleRecordsSave = () => {

    API.saveNewUser({
      email: this.state.email,
      username: this.state.username,
      age: this.state.age,
      gender: this.state.gender,
      zipcode: this.state.zipcode,
      password: this.state.password
    }).then(() => this.getUserName())
      .catch(err => { throw err });
};



  render() {
    return (
      <Container>
      <form id ="signupformid">
          <Row class = "row2"> 
          <Col size="md-6">
            <label> Email <input name="email" type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange}/></label>
            
            
            </Col>
            <Col size="md-6">
                    <label> UserName <input name="username" type="text" placeholder="Enter your username" value={this.state.username}
          onChange={this.handleInputChange}/></label>
                </Col>
</Row>
<Row class = "row2"> 
                <Col size="md-4">
                    <label> <select name="gender" value={this.state.gender}
          onChange={this.handleInputChange}>
                        <option>Choose...</option>
                        <option>Male</option>
                        <option>Female</option> Gender</select></label>
                
                </Col>
                <Col size="md-4">
                    <label> Current Age <input name="age" minLength="2" maxLength="2" id="age" placeholder="Age" value={this.state.age}
          onChange={this.handleInputChange}/></label>
                  
                </Col>
                <Col size="md-4">
                    <label> Zipcode <input name="zipcode" minLength="5" maxLength="5" placeholder="Enter Zipcode" value={this.state.zipcode}
          onChange={this.handleInputChange}/></label>
                   
                </Col>
                
            </Row>

            <Row class = "row2"> 
                <Col size="md-6">
                    <label> Password <input name="password" type="password" minLength="8" maxLength="8" placeholder="Password" value={this.state.password}
          onChange={this.handleInputChange}/></label>
                  
                </Col>
                <Col size="md-6">
                <label> Password <input name="password2" type="password" minLength="8" maxLength="8" placeholder="Verify Password" value={this.state.password2}
          onChange={this.handleInputChange}/></label>
              
                </Col>
            </Row>

            
            <Button variant="danger btn-md" type="submit" onClick={this.handleformSubmit}>
                Submit 
            </Button>

        </form>
        </Container>
    )}};

export default NewUser;