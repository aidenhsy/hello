import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import screens from "./screens";
import components from "./components";
import { Container } from "react-bootstrap";
const App = () => {
  return (
    <BrowserRouter>
      <components.Header />
      <main className="my-3">
        <Container>
          <Route path="/" component={screens.Home} exact />
          <Route path="/teachers/:id" component={screens.Teacher} />
          <Route path="/cart/:id?" component={screens.Cart} />
        </Container>
      </main>
      <components.Footer />
    </BrowserRouter>
  );
};

export default App;
