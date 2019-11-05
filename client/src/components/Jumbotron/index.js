import React from "react";



function Jumbotron({ children }) {
    return (
      <div
        style={{ height: 1800, clear: "both", paddingTop: 80, textAlign: "center" }}
        className="jumbotron"
      >
        {children}
      </div>
    );
  }
  
  export default Jumbotron;