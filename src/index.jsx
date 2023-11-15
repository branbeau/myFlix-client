import React from 'react';
import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import { Container, Row, Col } from 'react-bootstrap';

import "./index.scss";

function MyFlixApplication (){
  return (
    <Container>
      <Row>
        <Col>
          <MainView />
        </Col>
      </Row>
    </Container>
  );
}

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<MyFlixApplication />);