import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import "./index.css";

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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
		<RouterProvider router={router} />
    </React.StrictMode>
);
