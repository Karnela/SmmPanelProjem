import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="main-header">
    <div className="container">
      <div className="grid-container">
        <div className="col-span-12">
          <div className="main-header-content">
            <div className="main-header-logo">
              <Link to="/"><img src="/images/logo.png" alt="Site Logosu" className="logo" /></Link>
            </div>
            <div className="main-header-right">
              <div className="main-header-link">
                <Link to="/" className="main-header-link-item">Üye girişi</Link>
                <Link to="/services" className="main-header-link-item">Servisler</Link>
                <Link to="/api" className="main-header-link-item">API</Link>
                <Link to="/signup" className="main-header-link-item">Hızlı Üyelik</Link>
              </div>
              <div className="main-header-btn">
                <Link to="/signup" className="main-header-btn-item active">Kayıt Ol</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;