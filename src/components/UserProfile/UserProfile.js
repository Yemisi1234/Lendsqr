import React from 'react';
import './UserProfile.scss';
import {FiUsers} from 'react-icons/fi';
import {BiCoinStack} from 'react-icons/bi';
import {AiOutlineFileText} from 'react-icons/ai';
import {MdFilterList,} from 'react-icons/md';
import { Link } from 'react-router-dom';
import {Status} from '../Status/Status';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Select, { components } from 'react-select';
import { pageFilterStyles } from '../dropdownStyles';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';


const UserProfile = () => {
    const data = require('../../db.json')

    const userStatus = ["active", "pending", "inactive", "blacklisted"]

    const options = [
        {value: 10, label: "10"}, 
        {value: 20, label: "20"}, 
        {value: 50, label: "50"}, 
        {value: 100, label: "100"}, 
        {value: 200, label: "200"}, 
        {value: 400, label: "400"}, 
        {value: 500, label: "500"}, 
    ]

    return (
        <div className="userprofile">
            <Navbar />
            <Sidebar />
            <div className="user-main">
                <h1 className="user-main-header">Users</h1>
                <div className="users-div">
                    <div className="users">
                        <div className="users-icon-bg"><FiUsers className="users-icon" /></div>
                        <h4 className="users-text">users</h4>
                        <h2 className="users-count">2,453</h2>
                    </div>
                    <div className="users">
                        <div className="active-u-bg"><FiUsers className="active-u-icon" /></div>
                        <h4 className="users-text">active users</h4>
                        <h2 className="users-count">2,453</h2>
                    </div>
                    <div className="users">
                        <div className="users-wl-bg"><AiOutlineFileText className="users-wl-icon" /></div>
                        <h4 className="users-text">users with loans</h4>
                        <h2 className="users-count">12,453</h2>
                    </div>
                    <div className="users">
                        <div className="users-ws-bg"><BiCoinStack className="users-ws-icon" /></div>
                        <h4 className="users-text">users with savings</h4>
                        <h2 className="users-count">102,453</h2>
                    </div>
                </div>
                <div className="user-infos">
                    <div className="user-infos-container">
                        <div className="user-infos-container-header">
                            <h4 className="table-title">organization <MdFilterList className="table-title-icon" /></h4>
                            <h4 className="table-title">username <MdFilterList className="table-title-icon" /></h4>
                            <h4 className="table-title">email <MdFilterList className="table-title-icon" /></h4>
                            <h4 className="table-title">phone number <MdFilterList className="table-title-icon" /></h4>
                            <h4 className="table-title">date joined <MdFilterList className="table-title-icon" /></h4>
                            <h4 className="table-title">status <MdFilterList className="table-title-icon" /></h4>
                        </div>
                        {
                            data.slice(0, 9).map(data => (
                                <Link to={`/user/${data.id}`} className="user-details-link">
                                <div className="user-info-row">
                                    <p className="user-info">{data.company}</p>
                                    <p className="user-info">{data.firstName}</p>
                                    <p className="user-info">{data.email}</p>
                                    <p className="user-info">{data.phone}</p>
                                    <p className="user-info">May 15, 2020 10:00 AM</p>
                                    {/* <Status status="active" /> */}
                                    <Status status={userStatus[data.status]} />
                                </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="page-control">
                    <div className="list-filter">
                        <h5 className="list-filter-text">
                            Showing 
                            <span className="list-filter-dropdown">
                                <Select 
                                    name="filterCount"
                                    options={options}
                                    defaultValue={{value: "100", label: "100"}}
                                    styles={pageFilterStyles}
                                    className="list-filter-dropdown"
                                    placeholder=""
                                />
                            </span>
                            out of 100 
                        </h5>
                    </div>
                    <div className="page-num-container">
                        <div className="page-num">
                            <div className="page-num-control"><RiArrowLeftSLine /></div>
                            <div className="page-num-number">1</div>
                            <div className="page-num-number">2</div>
                            <div className="page-num-number">3</div>
                            <div className="page-num-number">...</div>
                            <div className="page-num-number">15</div>
                            <div className="page-num-number">16</div>
                            <div className="page-num-control"><RiArrowRightSLine /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
