import { ADD_PIZZA, DELIVER_PIZZA } from "../actions/pizzaActions";

const initialState = {
  pizza: [],
};

function backpackReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PIZZA:
      return {
        ...state,
        pizza: [...state.pizzas, action.pizza],
      };
    case DELIVER_PIZZA:
      return {
        ...state,
        pizzas: state.pizza.filter((pizza) => pizza.id !== action.pizzaId),
      };
    default:
      state;
  }
}
backpackReducer; //just for pushing
