
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import yippiePage from "./yippie-page/yippie-page.component";
import kiPage from "./ki-page/ki-page.component";


export default function Root() {
  return (
    <div>
    <h1>Hello to the Yippie Ki Yay page!</h1>
    <BrowserRouter>
      <Route path="/yippie" component={yippiePage} />
      <Route path="/ki" component={kiPage} />
    </BrowserRouter>
      </div>
  );
}