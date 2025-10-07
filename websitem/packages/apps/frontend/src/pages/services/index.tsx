import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ServicesPage = () => (
  <div>
    <Header />
    <main className="container" style={{ padding: '150px 0' }}>
      <div className="main-page-title col-span-12" style={{ marginBottom: '20px' }}>
        <i className="fas fa-list"></i> Servis Listesi
      </div>
      
      <p>Şu anda servisler yüklenemiyor. Lütfen daha sonra tekrar deneyin.</p>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Servis Adı</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fiyat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>Örnek Servis 1</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>10 TL</td>
          </tr>
        </tbody>
      </table>
    </main>
    <Footer />
  </div>
);

export default ServicesPage;