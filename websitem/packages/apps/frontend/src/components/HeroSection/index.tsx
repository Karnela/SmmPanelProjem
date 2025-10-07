import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';

const HeroSection = () => (
  <section className="home-section">
    <div className="container">
      <div className="home-section-content">
        <div className="home-left-list">
          <span className="badge"><i className="fa fa-bolt"></i>Dünyanın 1 Numaralı SMM Paneli</span>
          <h1 className="home-title">SMM Panel - En Ucuz SMM Panel</h1>
          <p className="small">Bu panel, sosyal medya başarınızı hızlandıracak araçlarla doludur, etkileşim ve görünürlüğünüzü artırarak sizi zirveye taşır.</p>
          <div className="home-btn">
            <Link to="/signup" className="btn btn-main text-center site-gradient">
              Ücretsiz Kayıt Olun<i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <LoginForm />
  </section>
);

export default HeroSection;