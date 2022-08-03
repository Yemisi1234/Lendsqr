import React from "react";
import { LENDSQR_LOGO } from "../assets/icons";
import { PABLO } from "../assets/icons";

export const Pablo = () => {
  return (
    <div className="pablo_container">
      <img src={LENDSQR_LOGO} alt="logo" className="logo" />
      <img src={PABLO} alt="pablo" className="pablo" />
    </div>
  );
};
