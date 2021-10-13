import React from 'react';
import './UserMenu.scss';
import {HiOutlineDotsVertical} from 'react-icons/hi';
import { IoEyeOutline } from 'react-icons/io5';
import { BsPersonCheck, BsPersonX } from 'react-icons/bs';

const UserMenu = () => {
    return (
        <>
            <HiOutlineDotsVertical className="status-menu" />
            {/* <div className="status-dropdown">
                <li className="status-dropdown-status"><IoEyeOutline className="status-icon" /> View Details</li>
                <li className="status-dropdown-status"><BsPersonX className="status-icon" /> Blacklist User</li>
                <li className="status-dropdown-status"><BsPersonCheck className="status-icon" /> Activate User</li>
            </div> */}
        </>
    )
}

export default UserMenu
