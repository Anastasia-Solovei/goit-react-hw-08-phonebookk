import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Switch, Route } from "react-router";

import AppBar from "./components/AppBar";
import HomeView from "./views/HomeView";
import LogInView from "./views/LogInView";
import PhoneBookView from "./views/PhoneBookView";
import SignUpView from "./views/SignUpView";
import { authOperations } from "./redux/auth";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={SignUpView} />
        <Route path="/login" component={LogInView} />
        <Route path="/contacts" component={PhoneBookView} />
      </Switch>
    </>
  );
}
