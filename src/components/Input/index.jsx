import React from "react";

const Input = ({ name, type, placeholder, handleChange, ...rest }) => {
  return (
    <input type={type} name={name} placeholder={placeholder} onChange={handleChange} {...rest} />
  );
};

export default Input;
