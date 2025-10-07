import axiosClient from 'src/api/axiosClient';

export const loginUser = async (credentials) => {
  try {
    const response = await axiosClient.post('/auth/login', credentials);
 
    if (response.data && response.data.token) {
      localStorage.setItem('authToken', response.data.token);
    }
    
    return response.data;
  } catch (error) {

    throw error.response.data;
  }
};


export const registerUser = async (userData) => {
  try {
    const response = await axiosClient.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logoutUser = () => {
  localStorage.removeItem('authToken');
 
  window.location.href = '/login';
};