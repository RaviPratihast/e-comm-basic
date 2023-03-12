import React from "react";
import { useProduct } from "../context/ecomm-context";

function Cart() {
  const { state, dispatch } = useProduct();
  return <div className="products-container">
    {state.cart.map(({ id, name, qty, price }) => {
    return (
      <div key={id} className="item-container">
        <h1>{name}</h1>
        <p> Price: {price}</p>
        <button
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: { id: id, name: name, qty: 1, price: price },
            })
          }
        >
         Remove
        </button>
      </div>
    );
  })}
  </div>
}

export default Cart;
