import React from 'react';
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function Header() {
    return (
        <div className='header'>
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <HomeIcon></HomeIcon>
                    <p>Home</p>
                </div>
                <div className="header__icon">
                    <FlashOnIcon></FlashOnIcon>
                    <p>Trending</p>
                </div>
                <div className="header__icon">
                    <LiveTvIcon></LiveTvIcon>
                    <p>Verified</p>
                </div>
                <div className="header__icon">
                    <VideoLibraryIcon></VideoLibraryIcon>
                    <p>Collections</p>
                </div>
                <div className="header__icon">
                    <SearchIcon></SearchIcon>
                    <p>Search</p>
                </div>
                <div className="header__icon">
                    <PersonIcon></PersonIcon>
                    <p>Account</p>
                </div>
            </div>
            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
                alt=""
                className="" />
        </div>
    );
}

export default Header;