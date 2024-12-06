import React from "react";
import "./header.css";

const NextHeader: React.FC = () => {
  return (
    <header className="next-header">
      <div className="next-header-container">
        <div className="next-header-top">
          <div className="next-header-left">
            <img src="/next/logo.svg" alt="logo" />
            <div className="next-search-bar">
              <input type="text" placeholder="Search product or brand" />
              <button className="next-search-btn">
                <img src="/next/search.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="next-header-right">
            <a href=""></a>
            <span className="account">My Account</span>
            <img src="/next/myaccount.svg" alt="myaccout" />
            <img src="/next/favourites.svg" alt="favourites" />
            <img src="/next/cart.svg" alt="favourites" />
            <button className="next-checkout-btn">CHECKOUT</button>
            <img src="/next/ie.png" alt="flag" className="flag" />
          </div>
        </div>

        <nav className="next-nav-links">
          <a href="#christmas">CHRISTMAS</a>
          <a href="#women">WOMEN</a>
          <a href="#men">MEN</a>
          <a href="#girls">GIRLS</a>
          <a href="#boys">BOYS</a>
          <a href="#baby">BABY</a>
          <a href="#shoes">SHOES</a>
          <a href="#home">HOME</a>
          <a href="#brands">BRANDS</a>
          <a href="#clearance" className="next-clearance">
            CLEARANCE
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NextHeader;
