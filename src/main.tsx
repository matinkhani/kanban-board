import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/globals.css";
import { MainPage } from "./app/page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
);
