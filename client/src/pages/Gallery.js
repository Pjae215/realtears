import React, { Component } from "react";
import API from "../utils/API";
import UserContext from "../pages/userContext";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      users: [],
      userIndex: 0,
      capitalizeFirstLetter: this.capitalizeFirstLetter,
      handleBtnClick: this.handleBtnClick
    };
  }

  // When the component mounts, a call will be made to get random users.
  componentDidMount() {
    this.loadUsers();
  }

  capitalizeFirstLetter(string = "") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  nextUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex >= this.state.users.length) {
      userIndex = 0;
    }
    this.setState({
      user: this.state.users[userIndex],
      userIndex: userIndex
    });
  }

  previousUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex < 0) {
      userIndex = this.state.users.length - 1;
    }
    this.setState({
      user: this.state.users[userIndex],
      userIndex: userIndex
    });
  }

  handleBtnClick = (event) => {
    // Get the title of the clicked button
    var btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      var userIndex = this.state.userIndex + 1;
      this.nextUser(userIndex);
    } else {
      var userIndex = this.state.userIndex - 1;
      this.previousUser(userIndex);
    }
  };

  loadUsers = () => {
    API.getMatches()
      .then(users => {
          return this.setState({
            users: users,
            user: users[0]
          });
        })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        <div>
          <h3 className="text-center">Could she be the one...?</h3>
          <Row>
            <CardContainer />
          </Row>
        </div>
      </UserContext.Provider>
    );
  }
}

export default Gallery;
