import React from "react";
import { BrowserRouter as Router, Switch, Route, RouteProps, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import { createBrowserHistory, History } from 'history';
import routes from 'src/pages/route';
import './style.less';


const Routes = withRouter(({location}) => (
  <TransitionGroup className="transition-wrap">
    <CSSTransition
      timeout={1000}
      classNames={'fade'}
      key={location.pathname}
    >
      <Switch location={location}>
        {
          routes.map((item: RouteProps, index: number) => (
            <Route key={`rt${index}`} {...item} exact />
          ))
        }
        <Redirect from="/*" to="/index" />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default () => {

  return (
    <Router basename="/activity">
      <Routes />
      {/*<Switch>
        {
          routes.map((item: RouteProps, index: number) => (
            <Route key={`rt${index}`} {...item} exact />
          ))
        }
        <Redirect from="/*" to="/index" />
      </Switch>*/}
    </Router>
  )
}
