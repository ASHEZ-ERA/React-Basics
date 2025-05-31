import { useReducer } from "react";
import { cartReducer, ACTIONS } from "./CartReducer";

const initialCart = [];

function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const sampleProduct = {
    id: 1,
    name: "Sample Product",
    price: 100, // ✅ fixed typo (was 'prize')
  };

  return (
    <>
      <h2>🛒 Shopping Cart</h2>

      <button
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_ITEM, payload: sampleProduct })
        }
      >
        ADD Item
      </button>

      <button onClick={() => dispatch({ type: ACTIONS.CLEAR_CART })}>
        Clear Cart
      </button>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price} x {item.quantity}
            <button
              onClick={() =>
                dispatch({ type: ACTIONS.INCREMENT, payload: { id: item.id } })
              }
            >
              ➕
            </button>
            <button
              onClick={() =>
                dispatch({ type: ACTIONS.DECREMENT, payload: { id: item.id } })
              }
            >
              ➖
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.REMOVE_ITEM,
                  payload: { id: item.id },
                })
              }
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <h4>
        Total: ₹
        {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </h4>
    </>
  );
}

export default App;
