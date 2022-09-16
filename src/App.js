// INTERPOLATION
function App() {
  let isIphone = false;
  let prodcutTitleIphone = "IPHONE 12";
  let productTitleAndorid = "Andorid 12";
  let productPrice = 99.99;

  // VIEW
  return (
    <div>
      <h1> {isIphone ? "iphone" : "android"} </h1>

      <h1> {isIphone ? prodcutTitleIphone : productTitleAndorid} </h1>

      <h1> {productPrice} </h1>
    </div>
  );
}

export default App;
