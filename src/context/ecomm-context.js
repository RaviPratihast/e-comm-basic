import { createContext, useContext, useReducer } from "react";
import { items } from "../items";

// creating the context
const ProductContext = createContext(null);
// using the context abstracting it from the normal user.
const useProduct = () => useContext(ProductContext);

const initialState = {
  product: items,
};

function reducer(state, action) {
  //   switch (action.type) {
  //     case "ADD_TO_PRODUCT":
  //       return {
  //         ...state,
  //         products: [...state.products, action.payload],
  //       };
  //     default:
  //       return state;
  //   }
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
