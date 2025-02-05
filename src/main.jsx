import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Authcontext from "./Context.jsx/Authcontext.jsx";
import Taskcontext from "./Context.jsx/Taskcontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authcontext>
      <Taskcontext>
        <App />
      </Taskcontext>
    </Authcontext>
  </StrictMode>
);
