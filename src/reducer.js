export function reducer(state, action) {
  // const itemIsPresent = state.cart.some(
  //   (cartItem) => cartItem.id === action.payload.id
  // );

  // this function will test the item present in the array.
  function itemIsPresent(arr) {
    return arr.some((arrItem) => {
      return arrItem.id === action.payload.id;
    });
  }

  switch (action.type) {
    case "ADD_TO_CART":
      if (itemIsPresent(state.cart)) {
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
    case "ADD_TO_WISHLIST":
      if (itemIsPresent(state.wishlist)) {
        return {
          ...state,
          wishlist: [...state.wishlist],
        };
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    default:
      return state;
  }
}
