import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import "./main.css";
import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ChakraProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </ChakraProvider>
  </ThemeProvider>
);
