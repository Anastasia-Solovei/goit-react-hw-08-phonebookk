import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router";
import { authOperations, authSelectors } from "./redux/auth";
import AppBar from "./components/AppBar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import("./views/HomeView"));
const LogInView = lazy(() => import("./views/LogInView"));
const PhoneBookView = lazy(() => import("./views/PhoneBookView"));
const SignUpView = lazy(() => import("./views/SignUpView"));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );
  console.log("isFetchingCurrentUser: ", isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />

      {!isFetchingCurrentUser && (
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <SignUpView />
            </PublicRoute>

            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LogInView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <PhoneBookView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      )}
    </>
  );
}
