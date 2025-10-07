import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.username || !formData.email || !formData.password) {
      setError('Tüm alanlar zorunludur.');
      return;
    }

    try {
      
      const response = await axios.post('/api/v1/users/', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      setSuccess('Başarıyla kayıt oldunuz! Giriş sayfasına yönlendiriliyorsunuz...');
      
      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (err: any) {
      if (err.response && err.response.data) {
       
        setError(JSON.stringify(err.response.data.detail) || 'Bir hata oluştu.');
      } else {
        setError('Kayıt sırasında bir sunucu hatası oluştu. Lütfen tekrar deneyin.');
      }
      console.error(err);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="grid-container">
          <div className="col-span-12">
            <div className="auth-screen-container signup">
              <div className="auth-screen signup">
                <div className="auth-screen-title"><i className="fad fa-envelope"></i>Kayıt Ol</div>
                <form onSubmit={handleSubmit} className="auth-screen-form">
                  
                  {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
                  {success && <div style={{ color: 'green', marginBottom: '10px' }}>{success}</div>}

                  <div className="form-group">
                    <label htmlFor="username" className="control-label">Kullanıcı Adınız</label>
                    <input type="text" id="username" name="username" className="form-control" onChange={handleChange} value={formData.username} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="control-label">E-posta</label>
                    <input type="email" id="email" name="email" className="form-control" onChange={handleChange} value={formData.email} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="control-label">Şifre</label>
                    <input type="password" id="password" name="password" className="form-control" onChange={handleChange} value={formData.password} />
                  </div>
                  <button type="submit" className="btn btn-main btn-block border-10">Üye ol</button>
                  <span className="signup-alt-text">Zaten bir hesabınız var mı? <Link to="/">Üye girişi</Link></span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignupPage;