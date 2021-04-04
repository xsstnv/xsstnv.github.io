import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  </Provider>
);

export default App;