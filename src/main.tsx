import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, ColorModeProvider, ColorModeScript, extendTheme, ThemeConfig } from "@chakra-ui/react";
import App from "./pages/App";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import "./index.css";
import '@fontsource-variable/mulish';
import ReactDOM from "react-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path:"calendar",
				element:<Calendar />    
			}
		],
    },
]);

const themeCfg: ThemeConfig = {
    initialColorMode: "dark",
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={themeCfg}>
            <ColorModeProvider>
		        <RouterProvider router={router} />
            </ColorModeProvider>
        </ChakraProvider>
    </React.StrictMode>
);
