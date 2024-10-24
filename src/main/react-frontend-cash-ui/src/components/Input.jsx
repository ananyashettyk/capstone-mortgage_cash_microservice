import React from "react";

const Input = ({ name, value, error, onChange }) => {
  return (
    <div className="form-group">
      <input
        autoFocus
        placeholder={name}
        onChange={onChange}
        value={value}
        name={name}
        id={name}
        type="text"
        className="form-control"
        style={{ marginTop: "9px" }}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
export default Input;
