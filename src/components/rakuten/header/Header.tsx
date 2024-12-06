import React from "react";
import { FaBars, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import "./header.css";

const RakutenHeader: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="header-center">
            <img
              src="/rakuten/rakuten-logo6.svg"
              alt="Rakuten"
              className="logo"
            />
            <a href="#section" className="link-down">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ marginLeft: "4px", width: "24px", height: "24px" }}
              >
                <path
                  d="M12.5785173,12.0211459 L7.32684676,17.2728165 C6.89000935,17.7096539 6.89128668,18.4184991 7.32927694,18.8564894 L8.18580253,19.713015 C8.62367488,20.1508873 9.33282729,20.1520932 9.7694754,19.7154451 L16.6731532,12.8117673 C16.891168,12.5937525 17.0000588,12.3079872 17,12.0219532 C16.999935,11.7342401 16.8910737,11.4484451 16.6731532,11.2305246 L9.7694754,4.32684676 C9.33263799,3.89000935 8.62379279,3.89128668 8.18580253,4.32927694 L7.32927694,5.18580253 C6.89140459,5.62367488 6.89019865,6.33282729 7.32684676,6.7694754 L12.5785173,12.0211459 Z"
                  id="Combined-Shape"
                  transform="translate(12.000000, 12.021088) rotate(-270.000000) translate(-12.000000, -12.021088)"
                />
              </svg>
            </a>
            <input
              type="text"
              className="search-input"
              placeholder="Que cherchez-vous ?"
            />
            <button className="search-button">🔍</button>
            <img src="/rakuten/merch.svg" alt="Rakuten" className="merch" />
          </div>
        </div>

        <div className="header-bottom">
          <button className="header-button">
            <FaBars />
            <span>Parcourir les catégories</span>
          </button>
          <button className="header-button">
            <span>
              Club<span style={{ color: "red" }}>R</span>
            </span>
          </button>
          <button className="header-button">
            <FaHeart />
            <span>Mes favoris</span>
          </button>
          <button className="header-button">
            <FaUser />
            <span>Se connecter</span>
          </button>
          <button className="header-button">
            <FaShoppingCart />
            <span>Panier</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default RakutenHeader;
