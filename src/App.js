import { Route, Routes } from "react-router-dom";
import AppNavLinks from "./components/AppNavLinks";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import SimpleForm from "./components/SimpleForm";
import SimpleList from "./components/SimpleList";

function App() {
  return (
    <>
      <AppNavLinks />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="simpleform" element={<SimpleForm />} />
        <Route path="simplelist" element={<SimpleList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
