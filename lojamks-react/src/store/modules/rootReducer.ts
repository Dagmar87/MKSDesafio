import { combineReducers } from "redux";
import ReturnType from "typescript";
import carrinhoReducer from "./carrinho/reducer";

export const rootReducer = combineReducers({ carrinho: carrinhoReducer });

export type RootState = ReturnType<typeof rootReducer>;
