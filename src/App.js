import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <AppNavLinks />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="notifications" element={<Notification />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </>
  );
}

function AppNavLinks() {
  return (
    <>
      <Link to="/home">Home |</Link>
      <Link to="/explore">Explore |</Link>
      <Link to="/notifications">Notifications </Link>
    </>
  );
}

function Home() {
  return <div className="alert alert-primary">Home</div>;
}

function Explore() {
  return <div className="alert alert-danger">Explore</div>;
}

function Notification() {
  return <div className="alert alert-success">Notification</div>;
}

export default App;
