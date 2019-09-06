import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from './style.js';

const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container">
        <div className="row w-100 mr-0">
          <div className="col-sm-6">
            <NavLink className="navbar-brand" to="/">
              Yadu
            </NavLink>
          </div>
          <div className="col-sm-6 text-right align-middle">
            <Navbar>
              <NavLink exact className="navbar-brand" to="/">
                Discover
              </NavLink>
              <NavLink exact className="navbar-brand" to="/popular">
                Popular
              </NavLink>
              <NavLink exact className="navbar-brand" to="/top-rated">
                Top Rated
              </NavLink>
              <NavLink exact className="navbar-brand" to="/upcoming">
                Upcoming
              </NavLink>
            </Navbar>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
