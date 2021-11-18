/* eslint-disable react/prefer-stateless-function */
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import React from 'react';
import Books from './components/books/books';
import Categories from './components/categories/category';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar">
            <div>
              <span>
                <Link to="/" className="nav-link">Books</Link>
              </span>
              <span>
                <Link to="/categories" className="nav-link">Categories</Link>
              </span>
            </div>
          </nav>
          <Routes>
            <Route exact path="/" element={<Books />} />
            <Route exact path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
