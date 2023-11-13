// CLIENT APP
// Entry point for the build script in your package.json

import { hydrateRoot } from "react-dom/client"

import { App } from "./App"

const domNode = document.getElementById("react-app")
hydrateRoot(
  domNode,
  <App
    ssrContent={null}
    // ssrContent={"<p style='color: green'>Hello from Client React</p>"}
  />,
  {
    // HydrationOptions
  }
)
