import React from 'react';
import { createRoot } from "react-dom";
import { MainView } from "./components/main-view/main-view.js";

import "./index.scss";

const MyFlixApplication = () => {
  return <MainView />;
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<MyFlixApplication />);