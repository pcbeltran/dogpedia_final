import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddBreedPage from "../pages/add-breed-page";
import  EditbBreedPage from "../pages/edit-breed-page";
import BreedsPage from "../pages/breeds-page";
import NotFoundPage from "../pages/not-found-page";
import Nav from "./nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <BreedsPage />
        </Route>

        <Route path="/add">
          <AddBreedPage />
        </Route>

        <Route path="/edit/:id">
          < EditbBreedPage />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
