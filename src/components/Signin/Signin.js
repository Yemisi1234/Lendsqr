import React, { useState } from "react";
import { Pablo } from "../../Atoms/pablo";
import { InputField } from "../../Atoms/InputField";
import "./Signin.scss";
const Signin = () => {
  return (
    <div className="container">
      <Pablo />
      <form className="form-content">
        <header>Welcome!</header>
        <p className="h_p">Enter details to login.</p>
        <InputField
          htmlFor="password"
          label="Password"
          name="password"
          inputType="email"
          placeholder=" Password"
        />
        <InputField
          htmlFor="email"
          label="email"
          name="email"
          inputType="email"
          placeholder=" Email"
        />
        <p className="forgotpassword">forgot password?</p>
        <button>LOG IN</button>
      </form>
    </div>
  );
};

export default Signin;
