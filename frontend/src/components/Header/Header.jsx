import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

import logo from "/logo.svg";

import css from "./Header.module.css";

const isLinkActive = ({ isActive }) =>
  clsx(css.link, { [css.active]: isActive });

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <Link className={css.logo} to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav className={css.nav}>
          <NavLink className={isLinkActive} to="/">
            Home
          </NavLink>
          <NavLink className={isLinkActive} to="/catalog">
            Catalog
          </NavLink>
          <NavLink className={isLinkActive} to="/favorites">
            Favorite
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
