import React, { useEffect } from "react";
import { RouteComponentProps } from 'react-router-dom';
import style from './style.module.less';
// import http from 'src/utils/http';
// import { Toast } from 'antd-mobile';

export default ({ history}: RouteComponentProps) => {

  useEffect(() => {
    console.log(9527)
    // getUserInfo();
  }, []);


  return (
    <div className={style.test} onClick={() => {
     /* history.push('/user', {
        index: 2
      })*/
    }}>
      lester2020
    </div>
  )
}
