import React, { useRef, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Dropdown from 'react-bootstrap/Dropdown';
import './Search.css';

function Search() {
    const listRef = useRef(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        const list = listRef.current;
        const liHeight = list.querySelector('li').clientHeight;
        const animationDuration = liHeight * 2 * 7;

        list.style.animation = `scrollUp ${animationDuration / 80}s linear infinite`;

        // Cleanup animation on component unmount
        return () => {
            list.style.animation = '';
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div className="Search-bar d-flex flex-row justify-content-center mt-5 pb-5 rounded-pill">
            <div className="search-input-container d-flex justify-content-center rounded-pill">
                <input type="text" className="rounded-pill pt-4 pb-4 ps-4" placeholder="Search by" onClick={toggleDropdown} />
                <div className="placeholder-animation">
                    <ul className="placeholder-list" ref={listRef}>
                        <li>City</li><br/>
                        <li>University</li><br/>
                        <li>Property</li><br/>
                        <li>City, University or Property</li>
                    </ul>
                </div>
                <button className="search-containe me-3 rounded-circle d-flex justify-content-center align-items-center" onClick={toggleDropdown}>
                    <AiOutlineSearch className="search-containe-icon" />
                </button>
            </div>
            {/* <Dropdown show={dropdownVisible}>
                <Dropdown.Toggle variant="light" id="" className="search-dropdown-toggle d-none">
                </Dropdown.Toggle>
                <Dropdown.Menu className=' dropdown-menu-end'>
                    <Dropdown.Item href="#/action-1">ALL</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">UK</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">IRE</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">CAN</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">AUS</Dropdown.Item>
                    <Dropdown.Item href="#/action-6">USA</Dropdown.Item>
                    <Dropdown.Item href="#/action-7">GER</Dropdown.Item>
                    <Dropdown.Item href="#/action-8">ESP</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
        </div>
    );
}

export default Search;
