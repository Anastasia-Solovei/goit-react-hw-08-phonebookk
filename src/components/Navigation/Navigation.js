import React from "react";
import { NavLink } from "react-router-dom";
import persistReducer from "redux-persist/lib/persistReducer";

import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <>
      <NavLink
        exact
        to="/"
        className={s.NavLink}
        activeClassName={s.activeNavLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/register"
        className={s.NavLink}
        activeClassName={s.activeNavLink}
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/login"
        className={s.NavLink}
        activeClassName={s.activeNavLink}
      >
        Log In
      </NavLink>
      <NavLink
        to="/contacts"
        className={s.NavLink}
        activeClassName={s.activeNavLink}
      >
        Phonebook
      </NavLink>
      <a href="/" className={s.NavLink}>
        UserMenu
      </a>
      {/* <a href="/" className={s.NavLink}></a> */}
      {/* <a href="/" className={s.NavLink}>
        Sign Up
      </a> */}
      {/* <a href="/" className={s.NavLink}>
        Log In
      </a> */}
      {/* <a href="/" className={s.NavLink}>
        Phonebook
      </a> */}
    </>
  );
}
