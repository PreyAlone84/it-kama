import { createRoot } from "react-dom/client";
import "./App.css";
import { App } from "./App.tsx";
// import { Swapi } from "./__swapi/Swapi.tsx";
// import { Game } from "./Game.tsx";
// import { Lesson24 } from "./__lesson-24/lesson-24.tsx";
// import { Counter } from "./__counter/Counter.tsx";

const rootEl = document.getElementById("root");
const reactRoot = createRoot(rootEl!);
reactRoot.render(<App />);
