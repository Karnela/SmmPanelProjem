import React from 'react';

const FAQ = () => (
    <section className="faq-box">
        <div className="container">
            <div className="grid-container">
                <div className="main-page-title col-span-12"><i className="fas fa-question"></i>S.S.S</div>
                <div className="col-span-12">
                    <div className="faq-list">
                        <div className="faq-item">
                            <div className="faq-header"><span className="faq-icon">+</span>SMM Panel Nedir?</div>
                            <div className="faq-content">SMM Paneli, sosyal medya hesaplarınızı yönetmek için kullanılan bir araçtır.</div>
                        </div>
                        <div className="faq-item">
                            <div className="faq-header"><span className="faq-icon">+</span>Nasıl Yardımcı Olur?</div>
                            <div className="faq-content">Takipçi, beğeni, izlenme gibi hizmetler sunarak popülerliği artırır.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default FAQ;