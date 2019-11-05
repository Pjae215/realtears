import React, {Component, Col} from "react";
import {Form, Button} from 'react-bootstrap';
import styled from 'styled-components';
// import {chivalry} from 'chivalry.png';

//don't forget the hash over the d in div
const Styles = styled.div` 

  Form {
    padding-top: 20px;
    background: white;
    height: 50px;
    position: relative;
  }

  .Label{
    color: black;
    &:hover{ color:red; }
  
  }
  `; 

  class SignIn extends Component {
    // Setting the initial values of this.state.username and this.state.password
    state = {
      email: "",
      password: ""
    };
  
    // handle any changes to the input fields
    handleInputChange = event => {
      // Pull the name and value properties off of the event.target (the element which triggered the event)
      const { name, value } = event.target;
  
      // Set the state for the appropriate input field
      this.setState({
        [name]: value
      });
    };
  
    // When the form is submitted, prevent page refresh //and alert the user of the email and username they chose
    handleFormSubmit = event => {
      event.preventDefault();
      this.setState({email: "", password: ""});
    };
  

    render() {
  return(
    
    <Styles>
<Form>
<Form.Row>
  <Form.Group as={Col} controlId="formGridEmail">
  <Form.Label>Email</Form.Label>
  <Form.Control name="email" type="email" placeholder="Enter email" value={this.state.email}
          onChange={this.handleInputChange} />
                <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
  </Form.Group>

  <Form.Group as={Col} controlId="formUserPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter your Password" id='password'value={this.state.email}
          onChange={this.handleInputChange}/>
  </Form.Group>
  </Form.Row>
  <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>
    View Your Profile
  </Button>
</Form>
</Styles>
  )
};}
  export default SignIn;