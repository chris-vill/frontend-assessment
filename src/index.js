// Styles
import '@styles/base/reset.sass';
import '@styles/base/main.sass';

// Libraries
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import { Main, Exercise1, Exercise2 } from '@pages';

ReactDom.render(
  <Router>
    <Switch>
      <Route path="/" component={ Main } exact/>
      <Route path="/exercise-1" component={ Exercise1 } exact/>
      <Route path="/exercise-2" component={ Exercise2 } exact/>
    </Switch>
  </Router>,
  document.getElementById("root")
);