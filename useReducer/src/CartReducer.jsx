export const ACTIONS = {
  ADD_ITEM: "add-item",
  REMOVE_ITEM: "remove-item",
  INCREMENT: "increment",
  DECREMENT: "decrement",
  CLEAR_CART: "clear-cart",
};

export function cartReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.ADD_ITEM: {
      const existingItem = state.find((item) => item.id === payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...payload, quantity: 1 }];
    }

    case ACTIONS.REMOVE_ITEM:
      return state.filter((item) => item.id !== payload.id);

    case ACTIONS.INCREMENT:
      return state.map((item) =>
        item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );

    case ACTIONS.DECREMENT:
      return state
        .map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // ✅ remove if quantity reaches 0

    case ACTIONS.CLEAR_CART:
      return [];

    default:
      console.warn(`Unhandled action type: ${type}`);
      return state;
  }
}
