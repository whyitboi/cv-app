import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Education } from "./components/Education";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Education />
  </StrictMode>,
);
