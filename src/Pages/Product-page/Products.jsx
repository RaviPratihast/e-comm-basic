import React from "react";
import { useProduct } from "../../context/ecomm-context";
import "./Product.css";
function Products() {
  const { state, dispatch } = useProduct();
  return (
    <div className="filter-product-container">
      <div className="filters-container">
        <div className="filters">
          <div className="heading-filters">
            <h3>Filters</h3>
            {/* there will one button that will remove if any filter is applied */}
          </div>
        </div>
        <div className="price-filter">
          <h4>Price Range</h4>
          <input type="range" min="0" max="10000" />
        </div>
        <div className="sort-filter"></div>
        <div className="include-out-of-stock-filter"></div>
      </div>
      <div className="products-container">
        {state.product.map(({ id, name, inStock, price }) => {
          return (
            <div key={id} className="item-container">
              <h1>{name}</h1>
              {inStock ? <p> Price: {price}</p> : <p>Out Of Stock</p>}

              <div className="item-button-container">
                {inStock && (
                  <button
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: { id: id, name: name, qty: 1, price: price },
                      })
                    }
                  >
                    Add To Cart
                  </button>
                )}
                {inStock && (
                  <button
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: { id: id, name: name, qty: 1, price: price },
                      })
                    }
                  >
                    Add To Wishlist
                  </button>
                )}
              </div>
            </div>
          );
          // console.log(id,name,inStock,price);
        })}
      </div>
    </div>
  );
}

export default Products;
