export const ADD_PIZZA = "ADD_PIZZA";
export const DELIVER_PIZZA = "DELIVER_PIZZA";

export function addPizza(pizza) {
  return {
    type: "ADD_PIZZA",
    pizza,
    //{assuming this is the item; aka the key and value}// also the object
  };
}

export function deliverPizza(pizzaId) {
  return { type: DELIVER_PIZZA, pizzaId };
}
