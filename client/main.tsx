import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root")!;

// Prevent multiple root creation during hot reloading
if (!container._reactRoot) {
  const root = createRoot(container);
  container._reactRoot = root;
  root.render(<App />);
} else {
  container._reactRoot.render(<App />);
}
