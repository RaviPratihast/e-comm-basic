import React from "react";
import { useProduct } from "../../context/ecomm-context";
import "./Cart.css"

function Cart() {
  const { state, dispatch } = useProduct();
  return <div className="cart-container">
    {state.cart.map(({ id, name, qty, price }) => {
    return (
      <div key={id} className="item-container item-in-cart">
        <h1>{name}</h1>
        <p>Qty: {qty}</p>
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
