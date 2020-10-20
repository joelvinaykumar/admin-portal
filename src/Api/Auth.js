import React from 'react';
import axios from 'axios';
import { message } from 'antd';
import { API_HOST, ACCESS_KEY_CONSTANT } from '../Utility/constant';
import {
  setStorageItem,
  getStorageItem,
  deleteStorageItem,
} from '../Utility/storage';
import { AuthContext } from '../context/authContext'

const api = axios.create({
  baseURL: API_HOST,
});

export const Login = async (payload) => {
  const { authenticated } = React.useContext(AuthContext);
  try {
    
    const res = await api.request({
      method: 'POST',
      url: '/auth/signin',
      data: payload,
    });

    if (!getStorageItem(ACCESS_KEY_CONSTANT)) {
      setStorageItem(ACCESS_KEY_CONSTANT, res.data && res.data.access_token);
    } else {
      message.error('Please logout current account and try again');
    }

    return { success: true };
  } catch (error) {
    error.response && message.error(error.response.data.message);
    return { success: false };
  }
};

export const Logout = () => {
  if (!getStorageItem(ACCESS_KEY_CONSTANT)) {
    message.error('Invalid operation. No logged in session');
  } else {
    deleteStorageItem(ACCESS_KEY_CONSTANT);
  }
};
