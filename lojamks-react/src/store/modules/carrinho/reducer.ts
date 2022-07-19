import produce from "immer";
import { CarrinhoActionTypes, CarrinhoState } from "./types";

const initialState: CarrinhoState = { products: [] };

export default function carrinho(
  state = initialState,
  action: CarrinhoActionTypes
): CarrinhoState {
  switch (action.type) {
    case "ADD_TO_CARRINHO":
      return produce<CarrinhoState>(state, (draft) => {
        const productIndex = draft.products.findIndex(
          (p) => p.id === action.payload.id
        );

        if (productIndex >= 0) {
          const product = draft.products[productIndex];
          product.amount += 1;
        } else {
          draft.products.push({ ...action.payload, amount: 1 });
        }
      });

    case "REMOVE_TO_CARRINHO":
      return produce<CarrinhoState>(state, (draft) => {
        const productIndex = draft.products.findIndex(
          (p) => p.id === action.payload
        );

        if (productIndex >= 0) {
          draft.products.splice(productIndex, 1);
        }
      });
    case "UPDATE_AMOUNT": {
      if (action.amount <= 0) {
        return state;
      }
      return produce<CarrinhoState>(state, (draft) => {
        const productIndex = draft.products.findIndex(
          (p) => p.id === action.id
        );

        if (productIndex >= 0) {
          const product = draft.products[productIndex];
          product.amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
