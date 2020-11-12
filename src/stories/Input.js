import React, { useState } from "react";
import PropTypes from "prop-types";
import "./input.css";

/**
 * Input component which accepts only 10 digit mobile number and email
 */
export const Input = ({ primary, hasError, ...props }) => {
  const [error, setError] = useState(false);
  const errorClass = error || hasError ? "error" : "";
  const mode = primary
    ? "storybook-input--primary"
    : "storybook-input--secondary";
  const validateInput = (value) => {
    /^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(value) || value === ""
      ? setError(false)
      : setError(true);
  };
  return (
    <input
      {...props}
      className={["storybook-input", mode, errorClass].join(" ")}
      placeholder="type here..."
      onFocus={() => setError(false)}
      onChange={(e) => validateInput(e.target.value)}
      onBlur={(e) => validateInput(e.target.value)}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  hasError: PropTypes.bool,
};
Input.defaultProps = {
  type: "text",
  autoFocus: false,
  primary: false,
  disabled: false,
  hasError: false,
};
