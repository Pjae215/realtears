import React from "react";
import {Container} from 'react-bootstrap'
import "./style.css";

function Wrapper(props) {

  return (
      <Container>
      {props.children}

  </Container>
  );
}

export default Wrapper;