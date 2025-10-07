import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './DashboardLayout.css'; 

interface DashboardLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

const DashboardLayout = ({ children, pageTitle }: DashboardLayoutProps) => {
  const location = useLocation();

  const menuItems = [
    { path: '/new-order', icon: 'fa-shopping-cart', name: 'Yeni Sipariş' },
    { path: '/orders', icon: 'fa-list-alt', name: 'Siparişlerim' },
    { path: '/add-fund', icon: 'fa-wallet', name: 'Bakiye Ekle' },
    { path: '/tickets', icon: 'fa-envelope', name: 'Destek' },
    { path: '/account', icon: 'fa-user', name: 'Hesabım' },
  ];

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <aside className="sidebar">
          <nav>
            <ul>
              {menuItems.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className={location.pathname === item.path ? 'active' : ''}>
                    <i className={`fas ${item.icon}`}></i>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="dashboard-content">
          <h1 className="dashboard-title">{pageTitle}</h1>
          <div className="dashboard-page-content">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;