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


const UserProfile = () => {
    const data = require('../../db.json')

    const userStatus = ["active", "pending", "inactive", "blacklisted"]

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
                            data.slice(0, 20).map(data => (
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
                        {/* <div className="user-info-row">
                            <p className="user-info">Lendsqr</p>
                            <p className="user-info">Ayodeji</p>
                            <p className="user-info">ayodeji@lendsqur.com</p>
                            <p className="user-info">08092375358</p>
                            <p className="user-info">May 15, 2020 10:00 AM</p>
                            <Status status="pending" />
                        </div>
                        <div className="user-info-row">
                            <p className="user-info">Lendsqr</p>
                            <p className="user-info">Ayodeji</p>
                            <p className="user-info">ayodeji@lendsqur.com</p>
                            <p className="user-info">08092375358</p>
                            <p className="user-info">May 15, 2020 10:00 AM</p>
                            <Status status="active" />
                        </div>
                        <div className="user-info-row">
                            <p className="user-info">Lendsqr</p>
                            <p className="user-info">Ayodeji</p>
                            <p className="user-info">ayodeji@lendsqur.com</p>
                            <p className="user-info">08092375358</p>
                            <p className="user-info">May 15, 2020 10:00 AM</p>
                            <Status status="inactive" />
                        </div>
                        <div className="user-info-row">
                            <p className="user-info">Lendsqr</p>
                            <p className="user-info">Ayodeji</p>
                            <p className="user-info">ayodeji@lendsqur.com</p>
                            <p className="user-info">08092375358</p>
                            <p className="user-info">May 15, 2020 10:00 AM</p>
                            <Status status="blacklisted" />
                        </div>
                        <div className="user-info-row">
                            <p className="user-info">Lendsqr</p>
                            <p className="user-info">Ayodeji</p>
                            <p className="user-info">ayodeji@lendsqur.com</p>
                            <p className="user-info">08092375358</p>
                            <p className="user-info">May 15, 2020 10:00 AM</p>
                            <Status status="pending" />
                        </div>
                        <div className="user-info-row">
                            <p className="user-info">Lendsqr</p>
                            <p className="user-info">Ayodeji</p>
                            <p className="user-info">ayodeji@lendsqur.com</p>
                            <p className="user-info">08092375358</p>
                            <p className="user-info">May 15, 2020 10:00 AM</p>
                            <Status status="active" />
                        </div>
                        <div className="user-info-row">
                            <p className="user-info">Lendsqr</p>
                            <p className="user-info">Ayodeji</p>
                            <p className="user-info">ayodeji@lendsqur.com</p>
                            <p className="user-info">08092375358</p>
                            <p className="user-info">May 15, 2020 10:00 AM</p>
                            <Status status="inactive" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
