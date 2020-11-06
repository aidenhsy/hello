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
        </Container>
      </main>
      <components.Footer />
    </BrowserRouter>
  );
};

export default App;
