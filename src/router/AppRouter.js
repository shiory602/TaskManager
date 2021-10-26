import { Router, Route, Switch } from "react-router";
import { createBrowserHistory }from 'history';

import LoginPage from "../components/LoginPage";
import SignupPage from "../components/SignupPage";

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </Router>
  )
}

export default AppRouter;