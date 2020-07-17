import React, { useEffect } from "react";
import { RouteComponentProps } from 'react-router-dom';
import style from './style.module.less';

export default ({history} : RouteComponentProps) => {

  useEffect(() => {

  }, []);

  return (
    <div className={style.test} onClick={() => {
      history.push('/set', {
        index: 2
      })
    }}>
      long
    </div>
  )
}
