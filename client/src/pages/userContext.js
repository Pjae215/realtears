import React from "react";

var UserContext = React.createContext({
  name: "",
  email: "",
  image: "",
  age: "",
  capitalizeFirstLetter: () => {},
  handleBtnClick: () => {}
});

export default UserContext;