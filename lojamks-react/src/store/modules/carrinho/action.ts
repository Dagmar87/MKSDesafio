import {
  ADD_TO_CARRINHO,
  REMOVE_TO_CARRINHO,
  CarrinhoActionTypes,
  UPDATE_AMOUNT,
} from "./types";
import { Product } from "../../../types";

export function addProductToCarrinho(newProduct: Product): CarrinhoActionTypes {
  return {
    type: ADD_TO_CARRINHO,
    payload: newProduct,
  };
}

export function removeToCarrinho(productId: number): CarrinhoActionTypes {
  return {
    type: REMOVE_TO_CARRINHO,
    payload: productId,
  };
}

export function updateProductAmount(
  productId: number,
  amount: number
): CarrinhoActionTypes {
  return {
    type: UPDATE_AMOUNT,
    id: productId,
    amount,
  };
}
