import { Product } from "../../../types";

export const ADD_TO_CARRINHO = "ADD_TO_CARRINHO";

export const REMOVE_TO_CARRINHO = "REMOVE_TO_CARRINHO";

export const UPDATE_AMOUNT = "UPDATE_AMOUNT";

export interface CarrinhoState {
  products: Product[];
}

interface AddToCarrinhoAction {
  type: typeof ADD_TO_CARRINHO;
  payload: Product;
}

interface RemoveToCarrinho {
  type: typeof REMOVE_TO_CARRINHO;
  payload: number;
}

interface UpdateCarrinhotProductAmount {
  type: typeof UPDATE_AMOUNT;
  id: number;
  amount: number;
}

export type CarrinhoActionTypes =
  | AddToCarrinhoAction
  | RemoveToCarrinho
  | UpdateCarrinhotProductAmount;