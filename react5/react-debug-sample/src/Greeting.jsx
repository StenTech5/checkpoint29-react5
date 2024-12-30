import React from "react";
import PropTypes from "prop-types";

const Greeting = ({ name }) => {
  if (!name) {
    return <p>Please enter your name.</p>;
  }
  return <h2>Hello, {name}!</h2>;
};

// Added PropTypes validation
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
