import axios from 'axios';

// import { API_HOST } from '../Utility/constant';

const API_HOST = 'http://localhost:5000'

export const LoginApi = async (email, password) => {
  const res = await axios({
    method: 'post',
    url: `${API_HOST}/auth/signin`,
    data: {
      email,
      password
    }
  });
  return res;
}