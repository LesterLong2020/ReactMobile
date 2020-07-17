import React, { useEffect } from "react";
import { RouteComponentProps } from 'react-router-dom';
import style from './style.module.less';

export default ({history} : RouteComponentProps) => {

  useEffect(() => {
    console.log(history)
  }, []);

  return (
    <div className={style.test} onClick={() => {
      history.goBack();
    }}>
      long lester
    </div>
  )
}
