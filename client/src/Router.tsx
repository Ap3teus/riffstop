import { h } from 'preact';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FrontPage from './pages/frontpage';
import styled from 'styled-components';

const AppRouter = () => (
  <Router>
    <Page>
      <Switch>
        <Route path="/foo">{/* <Foo /> */}</Route>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
    </Page>
  </Router>
);

const Page = styled.div`
  position: absolute;
  width: 100%;
`;

export default AppRouter;
