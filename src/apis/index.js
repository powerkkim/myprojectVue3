// src/apis/index.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // 기본 URL 설정
  timeout: 3000, // 요청 제한 시간 설정
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-token' // 필요에 따라 토큰 설정
  }
});

// 요청 인터셉터 추가
apiClient.interceptors.request.use(
  config => {
    // 요청을 보내기 전에 수행할 작업
    console.log('Request sent:', config);
    return config;
  },
  error => {
    // 요청 오류가 있는 경우 수행할 작업
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
apiClient.interceptors.response.use(
  response => {
    // 응답 데이터를 가공하거나 로깅
    console.log('Response received:', response);
    return response;
  },
  error => {
    // 응답 오류가 있는 경우 수행할 작업
    return Promise.reject(error);
  }
);

export default apiClient;
