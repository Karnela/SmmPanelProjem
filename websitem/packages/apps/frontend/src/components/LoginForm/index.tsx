import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => (
  <div className="login-box">
    <div className="container">
      <div className="login-box-form">
        <form method="post" action="/">
          <div className="login-box-content grid-container">
            <div className="col-span-3">
              <input type="text" className="login-form-control" placeholder="Kullanıcı Adınız" />
            </div>
            <div className="col-span-3">
              <input type="password" className="login-form-control" placeholder="Şifre" />
            </div>
            <div className="login-btn-group col-span-6">
              <Link className="login-resetpassword" to="/reset-password">
                <i className="fa-solid fa-unlock"></i>
              </Link>
              <div className="login-signin-btn">
                <button type="submit" className="btn btn-main login-btn btn-block text-center border-5">Giriş yap</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default LoginForm;