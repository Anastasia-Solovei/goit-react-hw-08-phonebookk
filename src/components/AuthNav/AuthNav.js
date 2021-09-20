//import { useDispatch, useSelector } from "react-redux";
//import { authSelectors, authOperations } from "../../redux/auth";

import React from "react";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={s.AuthNavContainer}>
      <NavLink
        to="/register"
        className={s.AuthNavLink}
        activeClassName={s.activeAuthNavLink}
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/login"
        className={s.AuthNavLink}
        activeClassName={s.activeAuthNavLink}
      >
        Log In
      </NavLink>
    </div>
  );
}
