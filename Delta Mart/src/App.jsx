import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

import ProductDetailPage from "./pages/ProductDetailPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import SingUpFormPage from "./layout/SingUpFormPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/product/:id" component={ProductDetailPage} />
        <Route path="/aboutUs" component={AboutUsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/signup" component={SingUpFormPage} />
      </Switch>
    </div>
  );
}

export default App;
