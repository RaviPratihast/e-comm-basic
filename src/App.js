import { Routes, Route, Link } from "react-router-dom";
import { Home, Products, Wishlist, Cart, Login } from "./Pages/index";
// import faker from "faker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/productListing">
          Products
        </Link>
        <Link className="link" to="/wishlist">
          Wishlist
        </Link>
        <Link className="link" to="/cart">
          Cart
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productListing" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
