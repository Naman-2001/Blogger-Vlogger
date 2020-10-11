import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Category from "./screens/Category";
import Single from "./screens/Single";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category" component={Category}>
          <Category />
        </Route>
        <Route path="/single">
          <Single />
        </Route>
        <Route path="">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
