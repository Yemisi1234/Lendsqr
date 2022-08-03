import React from "react";
import "./Sidebar.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  SuitCase,
  UsersIcon,
  GroupUsers,
  MoneyBag,
  HandShake,
  PiggyBank,
  Savings,
  UserCheck,
  UserTimes,
  Bank,
  CoinStack,
  Transaction,
  Services,
  UserCog,
  Settlements,
  Chart,
  Preferences,
  Pricing,
  Wheel,
  Logout,
  Clipboard,
  HomeIcon,
} from "../../images/icons";

const Sidebar = () => {
  const navItems = [
    { name: "Users", icon: <UsersIcon className="side-icon" /> },
    { name: "Guarantors", icon: <GroupUsers className="side-icon" /> },
    { name: "Loans", icon: <MoneyBag className="side-icon" /> },
    { name: "Decision Models", icon: <HandShake className="side-icon" /> },
    { name: "Savings", icon: <PiggyBank className="side-icon" /> },
    { name: "Loan Requests", icon: <Savings className="side-icon" /> },
    { name: "Whtelist", icon: <UserCheck className="side-icon" /> },
    { name: "Karma", icon: <UserTimes className="side-icon" /> },
  ];

  const navItems2 = [
    { name: "Organization", icon: <SuitCase className="side-icon" /> },
    { name: "Loan Products", icon: <Savings className="side-icon" /> },
    { name: "Savings Products", icon: <Bank className="side-icon" /> },
    { name: "Fees and Charges", icon: <CoinStack className="side-icon" /> },
    { name: "Transactions", icon: <Transaction className="side-icon" /> },
    { name: "Services", icon: <Services className="side-icon" /> },
    { name: "Service Account", icon: <UserCog className="side-icon" /> },
    { name: "Settlements", icon: <Settlements className="side-icon" /> },
    { name: "Reports", icon: <Chart className="side-icon" /> },
  ];

  const navItems3 = [
    { name: "Preferences", icon: <Preferences className="side-icon" /> },
    { name: "Fees and Pricing", icon: <Pricing className="side-icon" /> },
    { name: "Audit Logs", icon: <Clipboard className="side-icon" /> },
    { name: "System Messages", icon: <Wheel className="side-icon" /> },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <h3 className="sidebar-header">
          <SuitCase className="sidebar-header-icon" />
          <span className="sidebar-header-text">Switch Organization</span>
          <MdOutlineKeyboardArrowDown className="switch-dropdown" />
        </h3>
        <h3 className="sidebar-header">
          <HomeIcon className="sidebar-header-icon" />
          <span className="sidebar-header-text">Dashboard</span>
        </h3>
      </div>
      <div className="side-items-container">
        <h4 className="side-items-header">CUSTOMERS</h4>
        <ul className="side-items">
          {navItems.map((item) => (
            <li className="side-item">
              <Link to="/" className="side-link">
                {item.icon} <span className="side-text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <h4 className="side-items-header">BUSINESSES</h4>
        <ul className="side-items">
          {navItems2.map((item) => (
            <li className="side-item">
              <Link to="/" className="side-link">
                {item.icon} <span className="side-text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <h4 className="side-items-header">SETTINGS</h4>
        <ul className="side-items">
          {navItems3.map((item) => (
            <li className="side-item">
              <Link to="/" className="side-link">
                {item.icon} <span className="side-text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul>
        <li className="side-item">
          <Link to="/" className="side-link">
            <Logout className="side-icon" />
            <span className="sidebar-header-text">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
