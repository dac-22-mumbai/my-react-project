import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="home">Homeeee | </Link>
      <Link to="explore">Exploreeee | </Link>
      <Link to="notifications">Notificationnnnn</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="notifications" element={<Notification />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
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
