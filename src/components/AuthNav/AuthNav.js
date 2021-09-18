//import { useDispatch, useSelector } from "react-redux";
//import { authSelectors, authOperations } from "../../redux/auth";

import React from "react";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={s.NavLinksContainer}>
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
    </div>
  );
}
