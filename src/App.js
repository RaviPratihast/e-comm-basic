// import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home, Products, Wishlist, Cart, Login } from "./Pages/index";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/productListing">Products</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/wishlist">Cart</Link>
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
