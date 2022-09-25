import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import AppNavLinks, {
  NavLink4LoggedInUser,
  NavLink4LoggedOutUser,
} from "./components/AppNavLinks";
import Home from "./components/Home";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Playground from "./components/Playground";
import SimpleForm from "./components/SimpleForm";
import SimpleList from "./components/SimpleList";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <UnProtectedRoute>
              <Home />
            </UnProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <UnProtectedRoute>
              <Login />
            </UnProtectedRoute>
          }
        />
        <Route
          path="simpleform"
          element={
            <ProtectedRoute>
              <SimpleForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="simplelist"
          element={
            <ProtectedRoute>
              <SimpleList />
            </ProtectedRoute>
          }
        />
        <Route
          path="playground"
          element={
            <UnProtectedRoute>
              <Playground />
            </UnProtectedRoute>
          }
        />

        <Route
          path="aboutus"
          element={
            <UnProtectedRoute>
              <AboutUs />
            </UnProtectedRoute>
          }
        />

        <Route
          path="*"
          element={
            <UnProtectedRoute>
              <PageNotFound />
            </UnProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

function ProtectedRoute({ children }) {
  let login = localStorage.getItem("login");
  console.log(login);
  if (!login) {
    return <Navigate to="/login" replace={true} />;
  }

  return <NavLink4LoggedInUser>{children}</NavLink4LoggedInUser>;
}

function UnProtectedRoute({ children }) {
  let login = localStorage.getItem("login");

  if (login) {
    return <Navigate to="/" replace={true} />;
  }

  return <NavLink4LoggedOutUser>{children}</NavLink4LoggedOutUser>;
}

export default App;
