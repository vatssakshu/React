import Item from "./Component/item";
import "./App.css";
import Cart from "./Component/Cart";

function App() {
  return (
    <div className="App">
      <Item name="MacBook Pro" price={100000} />
      <Item name="Mobile" price={35000} />
      <Item name="Pendrive" price={4000} />
      <Cart />
    </div>
  );
}

export default App;
