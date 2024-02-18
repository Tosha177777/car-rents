import React from 'react';

import './headerClass.scss';
import { ReactComponent as Fav } from 'icons/heartFav.svg';
import { ReactComponent as Rent } from 'icons/rent.svg';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="headerCls">
      <div className="container headerCont">
        <Link to={`/`} className="logo">
          EASYCAR
        </Link>
        <nav className={`navigation`}>
          <NavLink to={`/catalog`}>
            <Rent className="svg" />
          </NavLink>
          <NavLink to={`/favorite`}>
            <Fav className="svg" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
