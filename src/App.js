/* eslint-disable react/prefer-stateless-function */
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import React from 'react';
import Books from './components/books/books';
import Categories from './components/categories/category';
import Header from './components/headers/header';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Books />} />
            <Route exact path="/categories" element={<Categories />} />
          </Routes>
        </main>
      </Router>
    );
  }
}

export default App;
