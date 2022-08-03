import React from "react";
import "./Status.scss";
import UserMenu from "../UserMenu/UserMenu";

export const Status = (props) => {
  const { status, id } = props;
  switch (status) {
    case "blacklisted":
      return (
        <div className="status-container">
          <div className="status-bg-red">
            <p className="status-text-red">Blacklisted</p>
          </div>
          <UserMenu id={id} />
        </div>
      );
    case "active":
      return (
        <div className="status-container">
          <div className="status-bg-green">
            <p className="status-text-green">Active</p>
          </div>
          <UserMenu id={id} />
        </div>
      );
    case "inactive":
      return (
        <div className="status-container">
          <div className="status-bg-black">
            <p className="status-text-black">Inactive</p>
          </div>
          <UserMenu id={id} />
        </div>
      );
    default:
      return (
        <div className="status-container">
          <div className="status-bg-yellow">
            <p className="status-text-yellow">Pending</p>
          </div>
          <UserMenu id={id} />
        </div>
      );
  }
};

// export const StatusInctive = (props) => {
//     return (
//         <div className="status-container">
//             <div className="status-bg-black">
//                 <p className="status-text-black">{props.status}</p>
//             </div>
//             <UserMenu />
//             <div className="status-dropdown">
//                 <li className="status-dropdown-status"><IoEyeOutline className="status-icon" /> View Details</li>
//                 <li className="status-dropdown-status"><BsPersonX className="status-icon" /> Blacklist User</li>
//                 <li className="status-dropdown-status"><BsPersonCheck className="status-icon" /> Activate User</li>
//             </div>
//         </div>
//     )
// }

// export default Status
