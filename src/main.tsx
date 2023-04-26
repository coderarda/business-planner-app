import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Calendar from "./Calendar";
import Home from "./Home";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
		children: [
			{
				path: "home",
				element: <Home />,
			},
			{
				path:"calendar",
				element:<Calendar />
			}
		],
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
		<RouterProvider router={router} />
    </React.StrictMode>
);
