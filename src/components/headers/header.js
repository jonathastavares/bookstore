import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './header.module.css';

const Header = () => (
  <header className={classes.header}>
    <div className={classes.headerContainer}>
      <h1 className={classes.headerTitle}>Bookstore CMS</h1>
      <nav>
        <ul className={classes.listContainer}>
          <li className={classes.listItem}>
            <NavLink to="/" className={classes.navLink}>BOOKS</NavLink>
          </li>

          <li className={classes.listItem}>
            <NavLink to="/categories" className={classes.navLink}>CATEGORIES</NavLink>
          </li>
        </ul>
      </nav>
    </div>

    <div>
      <i className="far fa-user fa-2x" />
    </div>
  </header>
);

export default Header;
