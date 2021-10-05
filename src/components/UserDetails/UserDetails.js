import React from 'react';
import { useParams } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import './UserDetails.scss';
import { Link } from 'react-router-dom';
import {IoIosArrowRoundBack} from 'react-icons/io'
import { AiOutlineUser } from 'react-icons/ai';
import {IoIosStar, IoIosStarOutline} from 'react-icons/io'
import Navbar from '../Navbar/Navbar';

const UserDetails = () => {
    const data = require('../../db.json')

    const userId = useParams()
    console.log(userId.id)

    const info = data.find(info => info.id === userId.id);
    console.log(info)

    return (
        <div className="user-details">
            <Navbar />
            <Sidebar/>
            <div className="details-main">
                <Link to="/users" className="return-link"><IoIosArrowRoundBack className="return-arrow" />Back to Users</Link>
                <div className="user-actions">
                    <h1 className="user-details-header">User Details</h1>
                    <div>
                        <button className="user-actions-button-red">Blacklist User</button>
                        <button className="user-actions-button-green">Activate User</button>
                    </div>
                </div>
                <div className="user-info">
                    <div className="user-info-header">
                        <div className="user-info-name-container">
                            <div className="user-info-img-container">
                                <AiOutlineUser className="user-profile-photo" />
                            </div>
                            <h3 className="user-profile-name">{info.firstName} {info.surName}<br /><span className="user-id">{(info.id).substring(0, 10)}</span></h3>
                        </div>
                        <div className="user-info-name-container">
                            <h3 className="user-profile-name">User's Tier<br /><span className="user-id"><IoIosStar className="star-icon" /><IoIosStarOutline className="star-icon" /><IoIosStarOutline className="star-icon" /></span></h3>
                        </div>
                        <div className="user-info-name-container">
                            <h3 className="user-profile-name">₦{info.balance}<br /><span className="user-id">0464634532/Providus Bank</span></h3>
                        </div>
                    </div>
                    <div className="user-profile-nav">
                        <li className="user-profile-nav-link">General Details</li>
                        <li className="user-profile-nav-link">Documents</li>
                        <li className="user-profile-nav-link">Bank Details</li>
                        <li className="user-profile-nav-link">Loans</li>
                        <li className="user-profile-nav-link">Savings</li>
                        <li className="user-profile-nav-link">App and System</li>
                    </div>
                    <div className="personal-info">
                        <div className="personal-info-section">
                            <h3 className="personal-info-heading">Personal Information</h3>
                            <div className="personal-info-body">
                                <div className="span-container">
                                    <p className="detail-key">full name</p>
                                    <span className="detail-value">{info.firstName} {info.surName}</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">Phone Number</p>
                                    <span className="detail-value">{info.phone}</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">Email Address</p>
                                    <span className="detail-value">{info.email}</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">Bvn</p>
                                    <span className="detail-value">{info.id}</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">gender</p>
                                    <span className="detail-value">{info.gender}</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">Marital status</p>
                                    <span className="detail-value">Single</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">children</p>
                                    <span className="detail-value">None</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">Type of residence</p>
                                    <span className="detail-value">Parent’s Apartment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="personal-info">
                        <div className="personal-info-section">
                            <h3 className="personal-info-heading">Education and Employment</h3>
                            <div className="personal-info-body-2">
                                <div className="span-container">
                                    <p className="detail-key">level of education</p>
                                    <span className="detail-value">B.Sc</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">employment status</p>
                                    <span className="detail-value">{info.isActive ? "Employed" : "Unemployed"}</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">sector of employment</p>
                                    <span className="detail-value">FinTech</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">Duration of employment</p>
                                    <span className="detail-value">2 years</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">office email</p>
                                    <span className="detail-value">{info.email}</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">Monthly income</p>
                                    <span className="detail-value">₦200,000.00- ₦400,000.00</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">loan repayment</p>
                                    <span className="detail-value">40,000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="personal-info">
                        <div className="personal-info-section">
                            <h3 className="personal-info-heading">Socials</h3>
                            <div className="personal-info-body">
                                <div className="span-container">
                                    <p className="detail-key">Twitter</p>
                                    <span className="detail-value">@{info.firstName}_{info.surName}</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">Facebook</p>
                                    <span className="detail-value">{info.firstName} {info.surName}</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">Instagram</p>
                                    <span className="detail-value">@{info.firstName}_{info.surName}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="personal-info">
                        <div className="personal-info-section">
                            <h3 className="personal-info-heading">Guarantor</h3>
                            <div className="personal-info-body">
                                <div className="span-container">
                                    <p className="detail-key">full Name</p>
                                    <span className="detail-value">{info.friends[0].name}</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">Phone Number</p>
                                    <span className="detail-value">07060780922</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">Email Address</p>
                                    <span className="detail-value">{info.friends[0].name}@gmail.com</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">Relationship</p>
                                    <span className="detail-value">Sister</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="personal-info">
                        <div className="personal-info-section">
                            <h3 className="personal-info-heading">Next of Kin</h3>
                            <div className="personal-info-body">
                                <div className="span-container">
                                    <p className="detail-key">full Name</p>
                                    <span className="detail-value">{info.friends[1].name}</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">Phone Number</p>
                                    <span className="detail-value">07060780922</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">Email Address</p>
                                    <span className="detail-value">{info.friends[1].name}@gmail.com</span>
                                </div>
                                <div className="span-container">
                                    <p className="detail-key">Relationship</p>
                                    <span className="detail-value">Sibling</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
