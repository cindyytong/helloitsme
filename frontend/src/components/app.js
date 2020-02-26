import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import NavBarContainer from './nav/nav_bar_container';
import MainPageContainer from './main/main_page_container';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ProfileContainer from "./profile/profile_container";
import StoryComposeContainer from "./stories/story_compose_container"
import StoryIndexContainer from "./stories/stories_index_container";


const App = () => (
  <>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

  // must be logged in 
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      {/* <ProtectedRoute
        exact
        path="/stories/new"
        component={StoryComposeContainer} */}
      />
  // logged in and out 
      {/* <Route exact path="/stories" component={StoryIndexContainer} /> */}
    </Switch>
  </>
);

export default App;


