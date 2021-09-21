//import { useDispatch, useSelector } from "react-redux";
//import { authSelectors, authOperations } from "../../redux/auth";

import React from "react";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import paths from "paths";

export default function AuthNav() {
  return (
    <div className={s.AuthNavContainer}>
      <NavLink
        to={paths.register}
        className={s.AuthNavLink}
        activeClassName={s.activeAuthNavLink}
      >
        Sign Up
      </NavLink>
      <NavLink
        to={paths.login}
        className={s.AuthNavLink}
        activeClassName={s.activeAuthNavLink}
      >
        Log In
      </NavLink>
    </div>
  );
}
