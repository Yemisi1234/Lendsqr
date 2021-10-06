import React from 'react';
import './Sidebar.scss';
import {HiUsers} from 'react-icons/hi';
import {FaHome, FaRegHandshake, FaPiggyBank, FaUserCheck, FaCoins, FaClipboardList} from 'react-icons/fa';
import {BsCurrencyExchange, BsFillPersonXFill, BsPersonLinesFill} from 'react-icons/bs';
import {IoBriefcase} from 'react-icons/io5';
import {GiBank, GiCartwheel} from 'react-icons/gi';
import {RiHandCoinFill, RiListSettingsFill} from 'react-icons/ri';
import {GoGraph} from 'react-icons/go';
import {ImPriceTags} from 'react-icons/im';
import {MdGroups, MdLogout, MdMiscellaneousServices, MdOutlineKeyboardArrowDown, MdPayments} from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const navItems = [
        {name: "Users", icon: <HiUsers className="side-icon" />},
        {name: "Guarantors", icon: <MdGroups className="side-icon" />,},
        {name: "Loans", icon: <BsCurrencyExchange className="side-icon" />},
        {name: "Decision Models", icon: <FaRegHandshake className="side-icon" />},
        {name: "Savings", icon: <FaPiggyBank className="side-icon" />},
        {name: "Loan Requests", icon: <RiHandCoinFill className="side-icon" />},
        {name: "Whtelist", icon: <FaUserCheck className="side-icon" />},
        {name: "Karma", icon: <BsFillPersonXFill className="side-icon" />},
    ]
    
    const navItems2 = [
        {name: "Organization", icon: <IoBriefcase className="side-icon" />},
        {name: "Loan Products", icon: <RiHandCoinFill className="side-icon" />,},
        {name: "Savings Products", icon: <GiBank className="side-icon" />},
        {name: "Fees and Charges", icon: <FaCoins className="side-icon" />},
        {name: "Transactions", icon: <BsCurrencyExchange className="side-icon" />},
        {name: "Services", icon: <MdMiscellaneousServices className="side-icon" />},
        {name: "Service Account", icon: <BsPersonLinesFill className="side-icon" />},
        {name: "Settlements", icon: <MdPayments className="side-icon" />},
        {name: "Reports", icon: <GoGraph className="side-icon" />},
    ]
    
    const navItems3 = [
        {name: "Preferences", icon: <RiListSettingsFill className="side-icon" />},
        {name: "Fees and Pricing", icon: <ImPriceTags className="side-icon" />,},
        {name: "Audit Logs", icon: <FaClipboardList className="side-icon" />},
        {name: "System Messages", icon: <GiCartwheel className="side-icon" />},
    ]

    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <h3 className="sidebar-header"><IoBriefcase className="sidebar-header-icon" />Switch Organization<MdOutlineKeyboardArrowDown className="switch-dropdown" /></h3>
                <h3 className="sidebar-header"><FaHome className="sidebar-header-icon" />Dashboard</h3>
            </div>
            <div className="side-items-container">
                <h4 className="side-items-header">CUSTOMERS</h4>
                <ul className="side-items">
                    {navItems.map(item => (<li className="side-item"><Link to="/" className="side-link">{item.icon} {item.name}</Link></li>))}
                </ul>
                <h4 className="side-items-header">BUSINESSES</h4>
                <ul className="side-items">
                    {navItems2.map(item => (<li className="side-item"><Link to="/" className="side-link">{item.icon} {item.name}</Link></li>))}
                </ul>
                <h4 className="side-items-header">SETTINGS</h4>
                <ul className="side-items">
                    {navItems3.map(item => (<li className="side-item"><Link to="/" className="side-link">{item.icon} {item.name}</Link></li>))}
                </ul>
            </div>
            <ul>
                <li className="side-item"><Link to="/" className="side-link"><MdLogout className="side-icon" /> Logout</Link></li>    
            </ul>
        </div>
    )
}

export default Sidebar
