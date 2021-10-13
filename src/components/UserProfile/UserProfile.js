import React, { useEffect, useRef, useState } from 'react';
import './UserProfile.scss';
import {MdFilterList,} from 'react-icons/md';
import { Link } from 'react-router-dom';
import {Status} from '../Status/Status';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Select, { components } from 'react-select';
import { listFilterStyles, pageFilterStyles } from '../dropdownStyles';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { CoinStackOutline, GroupUsersOutline, UsersLoan, UsersOutline } from '../../images/icons';
// import Pagination from '@material-ui/lab/Pagination';
// import Stack from '@mui/material/Stack';
// import Pagination from '../Pagination';


const UserProfile = () => {
    // let data = require('../../db.json')
    const data = require('../../db3.json');

    const [filteredData, setFilteredData] = useState(data);

    const userRef = useRef(null);

    const userStatus = ["active", "pending", "inactive", "blacklisted"]

    const [toggleFilter, setToggleFilter] = useState(false);

    const [filterState, setFilterState] = useState({
        organization: '',
        username: '',
        email: '',
        date: '',
        phone: '',
        status: '0'
    });



    const noOfPages = data.length/10

    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredData.slice(indexOfFirstUser, indexOfLastUser)
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const handleInput = (e) => {
        const {name, value} = e.target
        setFilterState({...filterState, [name]: value})
    }

    const handleSelect = (e) => {
        const {name, value} = e
        setFilterState({...filterState, [name]: value})
    }

    console.log(filterState)

    const handleToggleFilter = () => {
        setToggleFilter(!toggleFilter);
    }

    const options = [
        {value: 10, label: "10"}, 
        {value: 20, label: "20"}, 
        {value: 50, label: "50"}, 
        {value: 100, label: "100"}, 
        {value: 200, label: "200"}, 
        {value: 400, label: "400"}, 
    ]

    const options2 = data.map(data => (
        {value: data.company, label: data.company, name: "organization"}
    ))

    const options3 = userStatus.map((status, index) => (
        {value: index, label: status.toUpperCase(), name: "status"}
    ))

    const handleReset = (e) => {
        e.preventDefault()
        document.getElementById("filter-form").reset()
    }

    const newData = (arr, criteria) => {
        return arr.filter((obj) => {
            return Object.keys(criteria).every(key => {
                return obj[key] == criteria[key];
            })
        })
    }

    const criteriaObj = { 
        company: filterState.organization,
        firstName: filterState.username,
        email: filterState.email,
        phone: filterState.phone,
        status: filterState.status,
    }


    const handleFilter = (e) => {
        setToggleFilter(false);
        e.preventDefault()
        // const filter = 'email'
        // setData([data.filter((obj) => obj[filter] === filterState.username)])
        // const newData = data.filter((obj) => obj[filter] === filterState.email)
        
        // newData(data, { status: 0, username: 'Hart' })
        // setData(newData)
        const filteredDataArr = newData(data, criteriaObj)
        setFilteredData(filteredDataArr)
        console.log(filteredDataArr)
        console.log(data)
    }

    const handleItemsCount = (e) => {
        setFilteredData(data.slice(0, e.value))
    }
    console.log(filteredData)

    const handlePageRender = (e) => {
        const {innerText} = e.target
        setCurrentPage(parseInt(innerText))
    }

    return (
        <div className="userprofile">
            <Navbar />
            <Sidebar />
            <div className="user-main">
                <h1 className="user-main-header">Users</h1>
                <div className="users-div">
                    <div className="users">
                        <div className="users-icon-bg"><UsersOutline className="users-icon" /></div>
                        <h4 className="users-text">users</h4>
                        <h2 className="users-count">2,453</h2>
                    </div>
                    <div className="users">
                        <div className="active-u-bg"><GroupUsersOutline className="active-u-icon" /></div>
                        <h4 className="users-text">active users</h4>
                        <h2 className="users-count">2,453</h2>
                    </div>
                    <div className="users">
                        <div className="users-wl-bg"><UsersLoan className="users-wl-icon" /></div>
                        <h4 className="users-text">users with loans</h4>
                        <h2 className="users-count">12,453</h2>
                    </div>
                    <div className="users">
                        <div className="users-ws-bg"><CoinStackOutline className="users-ws-icon" /></div>
                        <h4 className="users-text">users with savings</h4>
                        <h2 className="users-count">102,453</h2>
                    </div>
                </div>
                <div className="user-infos">
                    <div className="user-infos-container">
                        <div className="user-infos-container-header">
                            <h4 className="table-title">organization <MdFilterList className="table-title-icon" onClick={handleToggleFilter} /></h4>
                            <h4 className="table-title">username <MdFilterList className="table-title-icon" onClick={handleToggleFilter} /></h4>
                            <h4 className="table-title">email <MdFilterList className="table-title-icon" onClick={handleToggleFilter} /></h4>
                            <h4 className="table-title">phone number <MdFilterList className="table-title-icon" onClick={handleToggleFilter} /></h4>
                            <h4 className="table-title">date joined <MdFilterList className="table-title-icon" onClick={handleToggleFilter} /></h4>
                            <h4 className="table-title">status <MdFilterList className="table-title-icon" onClick={handleToggleFilter} /></h4>
                        </div>
                        {
                            currentUsers.map(data => (
                                <Link to={`/user/${data.id}`} className="user-details-link">
                                <div className="user-info-row" key={data.id}>
                                    <p className="user-info">{data.company}</p>
                                    <p className="user-info">{data.firstName}</p>
                                    <p className="user-info">{data.email}</p>
                                    <p className="user-info">{data.phone}</p>
                                    <p className="user-info">May 15, 2020 10:00 AM</p>
                                    <Status status={userStatus[data.status]} />
                                </div>
                                </Link>
                            ))
                        }
                        <div className={toggleFilter ? "users-list-filter active" : "users-list-filter"}>
                            <form id="filter-form">
                            <h5 htmlFor="organization" className="filter-label">Organization</h5>
                            <Select 
                                name="organization"
                                className="filter-dropdown"
                                styles= {listFilterStyles}
                                options={options2}
                                placeholder="Select"
                                onChange={handleSelect}
                            />
                            <h5 htmlFor="username" className="filter-label">Username</h5>
                            <input name="username" type="text" className="filter-input" placeholder="User" onChange={handleInput} />   
                            <h5 htmlFor="email" className="filter-label">Email</h5>
                            <input name="email" type="email" className="filter-input" placeholder="Email" onChange={handleInput} />   
                            <h5 htmlFor="date" className="filter-label">Date</h5>
                            <input name="date" type="date" className="filter-input" placeholder="Date" onChange={handleInput} />   
                            <h5 htmlFor="phone" className="filter-label">Phone Number</h5>
                            <input name="phone" type="text" className="filter-input" placeholder="Phone Number" onChange={handleInput} />   
                            <h5 htmlFor="status" className="filter-label">Status</h5>
                            <Select 
                                name="status"
                                className="filter-dropdown"
                                styles= {listFilterStyles}
                                options={options3}
                                placeholder="Select"
                                onChange={handleSelect}
                            />
                            <div className="filter-buttons-container">
                                <button className="filter-button-outline" onClick={handleReset}>Reset</button>    
                                <button className="filter-button-solid" onClick={handleFilter}>Filter</button>    
                            </div> 
                            </form>  
                        </div>
                    </div>
                </div>
                <div className="page-control">
                    <div className="page-filter">
                        <h5 className="page-filter-text">
                            Showing 
                            <span className="page-filter-dropdown">
                                <Select 
                                    name="filterCount"
                                    options={options}
                                    defaultValue={{value: "400", label: "400"}}
                                    styles={pageFilterStyles}
                                    className="page-filter-dropdown-menu"
                                    onChange={handleItemsCount}
                                    placeholder=""
                                />
                            </span>
                            out of {data.length} 
                        </h5>
                    </div>
                    <div className="page-num-container">
                        <div className="page-num">
                            <div className="page-num-control"><RiArrowLeftSLine /></div>
                            <div className={`page-num-number`} onClick={handlePageRender}>1</div>
                            <div className={`page-num-number`} onClick={handlePageRender}>2</div>
                            <div className={`page-num-number`} onClick={handlePageRender}>3</div>
                            <div className="page-num-dot">...</div>
                            <div className={`page-num-number`} onClick={handlePageRender}>{noOfPages - 1}</div>
                            <div className={`page-num-number`} onClick={handlePageRender}>{noOfPages}</div>
                            <div className="page-num-control"><RiArrowRightSLine /></div>
                        </div>
                    </div>
                    {/* <div>
                        <Pagination 
                            usersPerPage={usersPerPage}
                            totalUsers={data.length}
                            count={noOfPages} 
                            size='small'
                            //https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
                        />
                    </div> */}
                </div>
                    {/* <div>
                        <Pagination 
                            usersPerPage={usersPerPage}
                            totalUsers={data.length}
                            paginate={paginate}
                        />
                    </div> */}
            </div>
        </div>
    )
}

export default UserProfile
