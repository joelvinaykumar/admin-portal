import React from 'react'
import { message } from 'antd';

export const setStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
  }catch(e) {
    message.error(e.response.data)
  }
}

export const getStorageItem = (key) => {
  try {
    localStorage.getItem(key);
  }catch(e) {
    message.error(e.response.data)
  }
}

export const deleteStorageItem = (key) => {
  try {
    localStorage.removeItem(key);
  }catch(e) {
    message.error(e.response.data)
  }
}

export const clearStorage = () => localStorage.clear();