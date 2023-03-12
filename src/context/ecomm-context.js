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
  switch (action.type) {
    case "ADD_TO_CART":
      // return {
      //   ...state,
      //   cart:[...state.cart,action.payload],
      // };
      const { payload } = action;
      return {
        ...state,
        cart:state.cart.map((cartItem)=>{
          if(cartItem.id===payload.id){
            
          }
        })
      }
      
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
