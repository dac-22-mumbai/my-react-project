function App() {
  return (
    <div>
      <h1>Hello I am Default</h1>

      <h1>I am pre define tag</h1>

      {/** AppHeader() */}
      <AppHeader />

      <AppHeader />

      <AppBody />

      <AppFooter />
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

function AppBody() {
  return (
    <div>
      <h1>I am App Body</h1>
    </div>
  );
}

function AppFooter() {
  return (
    <div>
      <h1>I am footer....!</h1>
    </div>
  );
}
export default App;
