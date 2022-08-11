import React from "react";
import {createRoot} from "react-dom/client";
import bridge from "@vkontakte/vk-bridge";
import App from "./App"; 



// Init VK  Mini App
bridge.send("VKWebAppInit");

const root = createRoot(document.getElementById("root"))
 
 
root.render(
    <App />
);

import("./eruda").then(({ default: eruda }) => {}); //runtime download
if (process.env.NODE_ENV === "development") {
  
}