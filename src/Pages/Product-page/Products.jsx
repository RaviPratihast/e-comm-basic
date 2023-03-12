import React from "react";
import { useProduct } from "../../context/ecomm-context";
import "./Product.css";
function Products() {
  const { state, dispatch } = useProduct();
  return (
    <div className="filter-product-container">
      
      <div className="filters-container">
        
      </div>
      <div className="products-container">
        {state.product.map((items) => {
          return (
            <div key={items.id} className="item-container">
              <h1>{items.name}</h1>
              {items.inStock ? (
                <p> Price: {items.price}</p>
              ) : (
                <p>Out Of Stock</p>
              )}
              {items.inStock && <button>Add To Cart</button>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
