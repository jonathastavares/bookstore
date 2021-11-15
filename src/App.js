/* eslint-disable react/prefer-stateless-function */
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import React from 'react';
import Books from './components/books/book';
import Categories from './components/categories/category';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <div>
              <span>
                <Link to="/">Books</Link>
              </span>
              <span>
                <Link to="/categories">Categories</Link>
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
