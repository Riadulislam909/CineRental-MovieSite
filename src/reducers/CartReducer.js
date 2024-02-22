const initialState = {
  cartData: [],
};
//we use initialState as obj because we can initialize other things with this obj. If we use same name of that state( const [cartData, setCartData] = useState([]); ), we can easily manage it.

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    //payload e total obj ache
    return { cartData: [...state.cartData, action.payload] };
  } else if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cartData: state.cartData.filter((item) => item.id !== action.payload.id),
    };
  } else {
    return state;
  }
};

export { cartReducer, initialState };

//next step e jsx file cartData r age state. bosbe. ar function gula dispatch diye call hobe.
