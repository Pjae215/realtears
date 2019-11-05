import React from 'react';
import UserContext from "../../pages/userContext";

function CardBody() {
  return (
    <UserContext.Consumer>
      {({ user }) => (
        <div>
          <h4>
          Age: {user.age}
          </h4>
        </div>
      )}
    </UserContext.Consumer>
  )
}

export default CardBody;