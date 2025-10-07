import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="grid-container">
        <div className="col-span-12">
          <div className="footer-list">
            <Link to="/">
              <div className="footer-logo">
                <img src="/images/logo.png" alt="Site Logosu" height="50px" width="150px" />
              </div>
            </Link>
            <div className="footer-btn">
              <Link className="btn btn-main border-10" to="/signup">Kayıt Ol</Link>
            </div>
          </div>
          <div className="footer-link">
            <div className="footer-link-item"><Link to="/">Üye girişi</Link></div>
            <div className="footer-link-item"><Link to="/services">Servisler</Link></div>
            <div className="footer-link-item"><Link to="/api">API</Link></div>
            <div className="footer-link-item"><Link to="/signup">Hızlı Üyelik</Link></div>
            <div className="footer-link-item"><i className="navbar-icon fab fa-google"></i><Link to="/blog">Blog</Link></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;