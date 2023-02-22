import axios from 'axios';
import ENV from 'react-native-config';

class API {
  request = config => {
    const {
      method = 'GET',
      url,
      params,
      baseURL = ENV.API_DOMAIN,
      headers,
    } = config;

    // console.log('API.token:', this.accessToken);
    // console.log('API.Request:', `${baseURL}${url}`, params, method);

    let newHeaders = { 'Content-Type': 'application/json' };
    if (this.accessToken) {
      newHeaders.Authorization = `Bearer ${this.accessToken}`;
    }
    if (headers) {
      newHeaders = { ...newHeaders, ...headers };
    }

    const requestConfig = {
      method,
      url,
      baseURL,
      headers: newHeaders,
      timeout: 20000,
      timeoutErrorMessage: 'Quá thời gian chờ dịch vụ',
    };

    if (params) {
      if (typeof method === 'string' && method.toLowerCase().trim() === 'get') {
        requestConfig.params = params;
      } else {
        requestConfig.data = params;
      }
    }

    return axios(requestConfig)
      .then(response => {
        // console.log('API.response:', response);
        return response?.data;
      })
      .catch(error => {
        // console.log('API.error:', error);

        if (error?.response?.data) {
          return Promise.reject(error?.response?.data);
        }
        return Promise.reject(error);
      });
  };
}

export default new API();
