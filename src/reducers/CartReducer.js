const initialState = {
  cartData: [],
};
//we use initialState as obj because we can initialize other things with this obj. If we use same name of that state( const [cartData, setCartData] = useState([]); ), we can easily manage it.

const cartReducer = (state, action) => {};

export { cartReducer, initialState };
