import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ApiPage = () => (
  <div>
    <Header />
    <main className="container" style={{ padding: '150px 0' }}>
      <div className="main-page-title col-span-12" style={{ marginBottom: '20px' }}>
        <i className="fas fa-code"></i> API Dökümantasyonu
      </div>
      <div className="api-docs">
        <h3>API Entegrasyonu Nasıl Yapılır?</h3>
        <p>API entegrasyonu için aşağıdaki adımları takip edebilirsiniz...</p>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px' }}>
          <code>
            {`
const API_URL = "https://senin-api-adresin.com/api";
const API_KEY = "SENIN_API_ANAHTARIN";

// Sipariş oluşturma örneği
// ...
            `}
          </code>
        </pre>
      </div>
    </main>
    <Footer />
  </div>
);

export default ApiPage;