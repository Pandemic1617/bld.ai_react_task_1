import React, { useState } from "react";
import './Navbar.css';

interface props {
    setSearchText: (text: string) => any;
}

const Navbar: React.FC<props> = ({ setSearchText: parentSetSearchText }) => {
    const [searchText, setSearchText] = useState("");

    return (
        <nav className="mynavbar">
            <img className="mymenu" src="https://img.icons8.com/ios-glyphs/344/menu--v1.png" />
            <img className="logo" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy Logo" />
            <span>Categories</span>

            <div className="search-container">
                <form className="form-inline" id="search-form" onSubmit={() => parentSetSearchText(searchText)}>
                    <button className="search-button" type="submit">
                        <img className="search-image" src="https://img.icons8.com/ios-glyphs/344/search--v1.png" />
                    </button>
                    <input
                        value={searchText}
                        onChange={(v) => setSearchText(v.target.value)}
                        className="form-control"
                        id="search-form-input"
                        type="text"
                        placeholder="Search for anything"
                        aria-label="Search"
                    />
                </form>
            </div>
            <span>Udemy Business</span>

            <span>Teach on Udemy</span>
            <img className="cart" src="https://img.icons8.com/material-outlined/344/shopping-cart--v1.png" alt="Cart Icon" />
            <button className="login-button">Log In</button>
            <button className="signup-button">Sign Up</button>
            <button className="language-button">
                <img src="https://img.icons8.com/material-outlined/344/globe--v2.png" />
            </button>
        </nav>
    );
};

export default Navbar;
