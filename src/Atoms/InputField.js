import React from "react";
import "./Index.scss";

export const InputField = ({
  inputType,
  placeholder,
  children,
  name,
  //   formData,
  //   handleChange,
  toggleReveal,
  value,
}) => {
  return (
    <div className="field">
      <input
        type={inputType}
        value={value}
        placeholder={placeholder}
        children={children}
        name={name}
        // formData={formData[name]}
        // handleChange={handleChange}
        purpose="form"
      />
    </div>
  );
};
