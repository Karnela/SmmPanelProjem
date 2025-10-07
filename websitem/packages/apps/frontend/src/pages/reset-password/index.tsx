import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from '@/app/ErrorBoundary';

import HomePage from '@/pages/home';
import SignupPage from '@/pages/signup';
import ServicesPage from '@/pages/services';
import ApiPage from '@/pages/api';
import ResetPasswordPage from '@/pages/reset-password';
import BlogPage from '@/pages/blog';

import NewOrderPage from '@/pages/new-order';
import OrdersPage from '@/pages/orders';
import AccountPage from '@/pages/account';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/api" element={<ApiPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          <Route path="/new-order" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;

