import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>HOME</h1>} />
        <Route path="home" element={<h1>HOME</h1>} />
        <Route path="explore" element={<h1>Explore</h1>} />
        <Route path="notifications" element={<h1>Notificatoin</h1>} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
