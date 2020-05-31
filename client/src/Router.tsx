import { h } from 'preact';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FrontPage from './pages/frontpage';
import styled, { createGlobalStyle } from 'styled-components';

const AppRouter = () => (
  <Router>
    <Switch>
      <Page>
        <Route path="/foo">{/* <Foo /> */}</Route>
        <Route path="/">
          <FrontPage />
        </Route>
      </Page>
    </Switch>
  </Router>
);

const Page = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default AppRouter;
