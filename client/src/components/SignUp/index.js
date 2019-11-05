import React, {Component} from "react";
import { Form, Button, Col} from 'react-bootstrap';
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
  }
  `;


class SignUp extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    email: "",
    password: "",
    gender: "",
    username: "",
    password2: "",
    year: "",
    month: "",
    day: ""
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
    alert(`For future sign in use : ${this.state.email}`);
    this.setState({ email: "", username: "", password: "", gender: "" }); //, year: "", month: "", day: "" 
  };

    render() {
        return (
    <Styles>

        <Form>
            <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" value={this.state.email}
          onChange={this.handleInputChange} />
                <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" name="gender" value={this.state.gender}
          onChange={this.handleInputChange}>
                        <option>Choose...</option>
                        <option>Male</option>
                        <option>Female</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control name="username" type="text" placeholder="Enter your username" value={this.state.username}
          onChange={this.handleInputChange}/>
          <Form.Text className="text-muted">
      This will be the name users will see on your profile
    </Form.Text>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" value={this.state.password}
          onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword2">
                    <Form.Label>Verify Password</Form.Label>
                    <Form.Control name="password2" type="password" placeholder="Password2" value={this.state.password2}
          onChange={this.handleInputChange} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridMonth">
                    <Form.Label>Birth Month</Form.Label>
                    <Form.Control name="month" placeholder="MM Format" value={this.state.month}
          onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridDay">
                    <Form.Label>Day of Month</Form.Label>
                    <Form.Control name="day"  placeholder="DD Format" value={this.state.day}
          onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridYear">
                    <Form.Label>Birth Year</Form.Label>
                    <Form.Control name="year" placeholder="YYYY Format" value={this.state.year}
          onChange={this.handleInputChange} />
                </Form.Group>
            </Form.Row>
            <Button variant="danger btn-md" type="submit" onClick={this.handleFormSubmit}>
                Submit 
            </Button>
        </Form>
    </Styles>
)}
        }
        export default SignUp;