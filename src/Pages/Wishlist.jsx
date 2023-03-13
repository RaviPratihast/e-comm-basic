import React from "react";
import { useProduct } from "../context/ecomm-context";
function Wishlist() {
  const { state, dispatch } = useProduct();
  return (
    <div className="cart-container">
      {state.wishlist.map(({ id, name, qty, price }) => {
        return (
          <div key={id} className="item-container">
            <h1>{name}</h1>
            {/* <p>Qty: {qty}</p> */}
            <p> Price: {price}</p>
            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_WISHLIST",
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
  );
}

export default Wishlist;
