import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={s.NavLinksContainer}>
      <NavLink
        exact
        to="/"
        className={s.NavLink}
        activeClassName={s.activeNavLink}
      >
        Home
      </NavLink>

      <NavLink
        to="/contacts"
        className={s.NavLink}
        activeClassName={s.activeNavLink}
      >
        Phonebook
      </NavLink>
    </div>
  );
}
