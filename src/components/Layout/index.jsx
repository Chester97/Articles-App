import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Loading from 'components/common/Loading';
import Main from 'components/pages/Main';
import Article from 'components/pages/Article';
import Header from './Header';
import Page from './Page';

function Layout({ client, loading }) {
  if (loading) {
    return <Loading />;
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <Page>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/article/:id" component={Article} />
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Page>
      </Router>
    </ApolloProvider>
  );
}

export default Layout;
