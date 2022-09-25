import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import AppNavLinks from "./components/AppNavLinks";
import Home from "./components/Home";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Playground from "./components/Playground";
import SimpleForm from "./components/SimpleForm";
import SimpleList from "./components/SimpleList";

function App() {
  return (
    <>
      <AppNavLinks />

      <Routes>
        {/** PROTECTED */}
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
            <ProtectedRoute>
              <Playground />
            </ProtectedRoute>
          }
        />

        {/** UNPROTECTED */}
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />

        <Route
          path="login"
          element={
            <UnProtectedRoute>
              <Login />
            </UnProtectedRoute>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

function ProtectedRoute({ children }) {
  let myjwt = localStorage.getItem("appjwt");

  // IF NOT LOGGED IN :: REDIRECT THE USER TO LOGIN
  if (!myjwt) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}

function UnProtectedRoute({ children }) {
  let myjwt = localStorage.getItem("appjwt");

  if (myjwt) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
}

export default App;
