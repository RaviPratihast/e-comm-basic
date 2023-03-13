import { createContext, useContext, useReducer } from "react";
import { items } from "../items";
import { reducer } from "../reducer";

// creating the context
const ProductContext = createContext(null);
// using the context abstracting it from the normal user.
const useProduct = () => useContext(ProductContext);

const initialState = {
  product: items,
  cart: [],
  wishlist:[],
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProduct };
