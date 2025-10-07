import React from 'react';

const Features = () => (
  <section className="feature-list">
    <div className="container">
      <div className="grid-container">
        <div className="main-page-title col-span-12"><i className="fa fa-bolt"></i>Neden test.com</div>
        <div className="feature-box col-span-4">
          <div className="feature-icon"><i className="fas fa-certificate"></i></div>
          <h2 className="feature-title">Hızlı ve Güvenli Sipariş İşlemleri</h2>
          <p className="feature-text">Siparişleriniz en kısa sürede işleme alınır ve güvenli bir şekilde tamamlanır.</p>
        </div>
        <div className="feature-box col-span-4">
          <div className="feature-icon"><i className="fas fa-users"></i></div>
          <h2 className="feature-title">Yüksek Kaliteli Takipçiler</h2>
          <p className="feature-text">Sunulan takipçiler gerçek ve etkileşimli hesaplardan sağlanır.</p>
        </div>
        <div className="feature-box col-span-4">
          <div className="feature-icon"><i className="fas fa-money-bill-wave"></i></div>
          <h2 className="feature-title">Uygun Fiyatlar</h2>
          <p className="feature-text">Yüksek kaliteli hizmetleri uygun fiyatlarla sunarak müşterilerinin bütçelerini korumayı hedefler.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;