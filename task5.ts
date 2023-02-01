type FIXME = Exclude<OrderState, "buyingSupplies" | "producing">;

type OrderState =
  | "initial"
  | "inWork"
  | "buyingSupplies"
  | "producing"
  | "fullfilled";

// Hint: with type guards return type can be removed
export const getUserOrderStates = (orderStates: OrderState[]): FIXME[] => {
  return orderStates.filter(
    (state) => state !== "buyingSupplies" && state !== "producing"
  ) as FIXME[];
};
