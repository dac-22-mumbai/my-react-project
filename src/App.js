// Function => Component => TAG => User Define Tag
// Java => Pre Define Clasess => String, Number, List
//      => User Define Class => Person, Employee,...
// HTML => Pre Define TAG => h1, h2, p, a, div,...
// React=> User Define Tag => <Person /> <Employee />

// THIS FUNCTION IS ALSO CREATING USER DEFINE TAG
// <App />
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <h1>Heloo1</h1>
      <h1>Heloo2</h1>
    </div>
  );
}

// IF FUNCTION RETURN JSX
// IT BECOMES COMPONENT
// IT BECOMES TAG
// IT BECOMES USER DEFINE COMPONET
// <Person />
function Person() {
  return <div>Hello</div>;
}

function Employee() {
  return <div>Employee</div>;
}

export default App;
