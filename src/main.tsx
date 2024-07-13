// Imports
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// App
import App from "./App.tsx";

// Stylesheets
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
);
