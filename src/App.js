import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

const App = () => (
  <Router>
    <Header />
    <Content />
    <Footer />
  </Router>
);

export default App;
