import "./footer.css";

const NextFooter = () => {
  return (
    <footer className="next-footer">
      <div className="next-footer-social">
        <div className="next-footer-width">
          <h4>Our Social Networks</h4>
          <div className="next-social-icons">
            <a href="#" aria-label="Facebook">
              <img
                src="/next/social-facebook.svg"
                className="next-footer-social-icons"
              />
            </a>
            <a href="#" aria-label="X">
              <img
                src="/next/social-x.svg"
                className="next-footer-social-icons"
              />
            </a>
            <a href="#" aria-label="TikTok">
              <img
                src="/next/social-tiktok.svg"
                className="next-footer-social-icons"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src="/next/social-instagram.svg"
                className="next-footer-social-icons"
              />
            </a>
            <a href="#" aria-label="Pinterest">
              <img
                src="/next/social-pinterest.svg"
                className="next-footer-social-icons"
              />
            </a>
            <a href="#" aria-label="YouTube">
              ▶
              <img
                src="/next/social-youtube.svg"
                className="next-footer-social-icons"
              />
            </a>
          </div>
        </div>
        <div className="next-footer-account">
          <h4>My Account</h4>

          <p>
            <a href="#">Sign-in to your account</a>
          </p>
        </div>
        <div className="next-footer-links">
          <div className="next-footer-column">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="#">Returns Information</a>
              </li>
              <li>
                <a href="#">Shipping Information</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Product Recall</a>
              </li>
              <li>
                <a href="#">Find a Store</a>
              </li>
            </ul>
          </div>
          <div className="next-footer-column">
            <h4>Privacy & Legal</h4>
            <ul>
              <li>
                <a href="#">Privacy & Cookie Policy</a>
              </li>
              <li>
                <a href="#">Gender Pay Gap Report</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Manually Manage Cookies</a>
              </li>
            </ul>
          </div>
          <div className="next-footer-column">
            <h4>Departments</h4>
            <ul>
              <li>
                <a href="#">Womens</a>
              </li>
              <li>
                <a href="#">Mens</a>
              </li>
              <li>
                <a href="#">Boys</a>
              </li>
              <li>
                <a href="#">Girls</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Baby</a>
              </li>
              <li>
                <a href="#">Brands</a>
              </li>
            </ul>
          </div>
          <div className="next-footer-column">
            <h4>Other Services</h4>
            <ul>
              <li>
                <a href="#">Media & Press</a>
              </li>
              <li>
                <a href="#">The Company</a>
              </li>
              <li>
                <a href="#">Careers@next</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="next-footer-mobile">
          <a href="#">View mobile site</a>
        </div>
        <div className="next-footer-copyright">
          <p>© 2024 Next Retail Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default NextFooter;
