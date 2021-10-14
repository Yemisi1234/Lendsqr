import React, { useState } from 'react';
import './UserMenu.scss';
import {HiOutlineDotsVertical} from 'react-icons/hi';
import { IoEyeOutline } from 'react-icons/io5';
import { BsPersonCheck, BsPersonX } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const UserMenu = ({ id }) => {
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const toggleUserMenu = () => {
        setUserMenuOpen(!userMenuOpen)
    }

    return (
        <div className="status-menu-container">
            <div className="status-icon-container" onClick={toggleUserMenu}>
                <HiOutlineDotsVertical className="status-menu" />
            </div>
            <div className={userMenuOpen ? "status-dropdown active" : "status-dropdown"}>
                <li className="status-dropdown-status"><IoEyeOutline className="status-icon" onClick={toggleUserMenu} /><Link to={`/user/${id}`} className="status-profile-link">View Details</Link></li>
                <li className="status-dropdown-status"><BsPersonX className="status-icon" onClick={toggleUserMenu} /> Blacklist User</li>
                <li className="status-dropdown-status"><BsPersonCheck className="status-icon" onClick={toggleUserMenu} /> Activate User</li>
            </div>
        </div>
    )
}

export default UserMenu
