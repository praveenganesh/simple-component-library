import React from "react";
import PropTypes from "prop-types";
import "./select.css";

/**
 * A simple select component
 */
export const Select = ({ primary, disabled, values, hasError, ...props }) => {
  const error = hasError ? "error" : "";

  return (
    <select
      disabled={disabled}
      className={["storybook-select", error].join(" ")}
    >
      <option value="" disabled={true} selected>
        Select your option
      </option>
      {values.map((value) => (
        <option value={value}>{value}</option>
      ))}
    </select>
  );
};

Select.propTypes = {
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  values: PropTypes.array,
  hasError: PropTypes.bool,
};
Select.defaultProps = {
  disabled: false,
  values: ["volvo", "saab", "opel", "audi"],
  hasError: false,
};
