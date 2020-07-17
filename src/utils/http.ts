import Axios, { AxiosInstance, Method, AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { Toast } from 'antd-mobile';

const instance: AxiosInstance = Axios.create({
  timeout: 5000,
});

/**
 * 拦截器
 */
instance.interceptors.request.use( (config: AxiosRequestConfig) => {
  return config;
}, (err: AxiosError) => {
  return Promise.reject(err);
});

instance.interceptors.response.use((res: AxiosResponse) => {
  return res;
}, (err: AxiosError) => {
  return Promise.reject(err);
});

/**
 * 处理response数据
 * @param res
 * @param resolve
 * @param reject
 */
const handleRes = (res: AxiosResponse, resolve: Function, reject: Function) => {
  if(res.status === 200) {
    if(res.data.code === 0) {
      resolve(res.data.data);
    } else {
      const { msg } = res.data;
      Toast.fail(msg);
      reject(msg);
    }
  } else {
    const { statusText } = res;
    Toast.fail(statusText);
    reject(statusText);
  }
};

const get = (url: string, params?: any, config?: AxiosRequestConfig) => {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params,
      ...config
    }).then((res: AxiosResponse) => {
      handleRes(res, resolve, reject);
    }).catch((err: AxiosError) => {
      reject(err);
    })
  })
};

const deleteMethod = (url: string, data: any, config?: AxiosRequestConfig) => {
  return new Promise((resolve, reject) => {
    instance.delete(url, {
      data: {
        ...data
      },
      ...config
    }).then((res: AxiosResponse) => {
      handleRes(res, resolve, reject);
    }).catch((err: AxiosError) => {
      reject(err)
    })
  })
};

type RequestMethod = 'post' | 'put';

const unGet = (type: RequestMethod) => {
  return (url: string, data: any, config?: AxiosRequestConfig) => {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      instance[type](url, data, {
        ...config
      }).then((res: AxiosResponse) => {
        handleRes(res, resolve, reject);
      }).catch((err: AxiosError) => {
        reject(err);
      })
    })
  }
};

const request =  function (url: string, params?: any, type: Method = 'get', config?: AxiosRequestConfig) {

  return new Promise((resolve, reject) => {

    /**
     * 处理response数据
     * @param res
     */
    const handleRes = (res: AxiosResponse) => {
      if(res.status === 200) {
        if(res.data.code === 0) {
          resolve(res.data.data);
        } else {
          const { msg } = res.data;
          Toast.fail(msg);
          reject(msg);
        }
        /* }*/
      } else {
        const { statusText } = res;
        Toast.fail(statusText);
        reject(statusText);
      }
    };

    if (type === 'get') {
      instance.get(url, {
        params,
        ...config
      }).then((res: AxiosResponse) => {
        handleRes(res);
      }).catch((err: AxiosError) => {
        reject(err);
      })
    } else if (type === 'delete') {
      instance.delete(url, {
        data: {
          ...params
        },
        ...config
      }).then((res: AxiosResponse) => {
        handleRes(res);
      }).catch((err: AxiosError) => {
        reject(err)
      })
    } else {
      // @ts-ignore
      instance[type](url, params, {
        ...config
      }).then((res: AxiosResponse) => {
        handleRes(res);
      }).catch((err: AxiosError) => {
        reject(err);
      })
    }
  })
};

export default {
  get,
  post: unGet('post'),
  delete: deleteMethod,
  put: unGet('put'),
  request
}
