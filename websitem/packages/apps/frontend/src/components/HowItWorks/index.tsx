import React from 'react';

const HowItWorks = () => (
    <section className="why-work">
        <div className="container">
            <div className="grid-container">
                <div className="main-page-title col-span-12"><i className="fas fa-cog"></i>Nasıl Çalışır?</div>
                <div className="step-box col-span-3">
                    <div className="step-icon"><i className="fa fa-user-plus" aria-hidden="true"></i></div>
                    <div className="step-text"><h3>Hesap Oluştur</h3><p>Kolay bir kayıt süreciyle hemen alışverişe başlayabilirsiniz.</p></div>
                    <div className="step-number">1</div>
                </div>
                <div className="step-box col-span-3">
                    <div className="step-icon"><i className="fa fa-wallet" aria-hidden="true"></i></div>
                    <div className="step-text"><h3>Bakiye Yükle</h3><p>Hızlı ve kolay bir şekilde bakiye ekleyin.</p></div>
                    <div className="step-number">2</div>
                </div>
                <div className="step-box col-span-3">
                    <div className="step-icon"><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
                    <div className="step-text"><h3>Sipariş Ver</h3><p>İhtiyacınıza en uygun hizmetleri keşfedin.</p></div>
                    <div className="step-number">3</div>
                </div>
                <div className="step-box col-span-3">
                    <div className="step-icon"><i className="fa fa-check-circle" aria-hidden="true"></i></div>
                    <div className="step-text"><h3>Sipariş Tamamlandı</h3><p>Hizmetlerimizin tadını çıkarın.</p></div>
                    <div className="step-number">4</div>
                </div>
            </div>
        </div>
    </section>
);

export default HowItWorks;