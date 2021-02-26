import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Today from "../pages/Today";
import Forescast from "../pages/Forescast";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/today" component={Today} />
        <Route exact path="/forecast" component={Forescast} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
