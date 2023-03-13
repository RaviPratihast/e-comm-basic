import { createContext, useContext, useReducer } from "react";
import { items } from "../items";

// creating the context
const ProductContext = createContext(null);
// using the context abstracting it from the normal user.
const useProduct = () => useContext(ProductContext);

const initialState = {
  product: items,
  cart: [],
};

function reducer(state, action) {
  const itemIsPresent = state.cart.some(
    (cartItem) => cartItem.id === action.payload.id
  );
  switch (action.type) {
    case "ADD_TO_CART":
      if (itemIsPresent) {
        return {
          ...state,
          cart: state.cart.map((cartItem) => {
            return cartItem.id === action.payload.id
              ? { ...cartItem, qty: cartItem.qty + action.payload.qty }
              : cartItem;
          }),
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
}

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProduct };
