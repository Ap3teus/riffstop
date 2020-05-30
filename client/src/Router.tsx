import { h } from 'preact';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FrontPage from './pages/frontpage';
import styled, { createGlobalStyle } from 'styled-components';
import Navigation from './pages/Navigation';

const AppRouter = () => (
  <Router>
    <Switch>
      <Navigation />
      <Route path="/foo">{/* <Foo /> */}</Route>
      <Route path="/">
        <FrontPage />
      </Route>
    </Switch>
  </Router>
);

const Page = styled.div`
  position: absolute;
  width: 100%;
`;

export default AppRouter;
