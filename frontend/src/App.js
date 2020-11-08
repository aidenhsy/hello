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
          <Route path="/users/:id" component={screens.UserDisplay} />
          <Route path="/cart/:id?" component={screens.Cart} />
          <Route path="/trial/:id" component={screens.Trial} />
        </Container>
      </main>
      <components.Footer />
    </BrowserRouter>
  );
};

export default App;
