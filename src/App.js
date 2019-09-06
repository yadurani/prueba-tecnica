import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PATH_POPULAR, PATH_TOP_RATED, PATH_UPCOMING } from './api';
import Layout from './components/element/Layout';
import Discover from './views/home';
import DetailPost from './views/detailPost';
import Category from './views/category';
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" render={() => <Discover title="Discover" />} />
        <Route exact path="/movie/:id" component={DetailPost} />
        <Route
          exact
          path="/popular"
          render={() => <Category title="Popular" section={PATH_POPULAR} />}
        />
        <Route
          exact
          path="/top-rated"
          render={() => <Category title="Top Rated" section={PATH_TOP_RATED} />}
        />
        <Route
          exact
          path="/upcoming"
          render={() => <Category title="Upcoming" section={PATH_UPCOMING} />}
        />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
