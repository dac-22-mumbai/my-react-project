function App() {
  return (
    <div>
      <h1>Hello I am Default</h1>

      <h1>I am pre define tag</h1>

      {/** AppHeader() */}
      <AppHeader />

      <AppHeader />
    </div>
  );
}

// <AppHeader />
function AppHeader() {
  console.log("Appheader method is called...");

  return (
    <div>
      <h1>App Header</h1>
    </div>
  );
}

export default App;
