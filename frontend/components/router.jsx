import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import HomePage from './home_page/home_page.jsx';
import NavBarContainer from './navbar/navbar_container.jsx';
import Content from './content/content.jsx';
import App from './app.jsx';




const AppRouter = (props, context) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    console.log(context.store.getState().session.currentUser);
    if(context.store.getState().session.currentUser){
      hashHistory.push('/channels');
    }
  };

  const _ensureLoggedIn = (nextState, replace) =>{
    console.log('not logged in');
    if(!context.store.getState().session.currentUser){
      replace('/home');
    }
  };


  return (
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ HomePage } />
        <Route path="/home" component={HomePage} onEnter={_redirectIfLoggedIn}/>
        <Route path='/channels' component={Content} onEnter={_ensureLoggedIn}>
        </Route>
      </Route>
    </Router>
);
};

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
