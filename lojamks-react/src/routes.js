import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/carrinho" exact component={Carrinho} />
    </Switch>
  );
}
