import { createBrowserRouter, RouteObject } from "react-router-dom";
import Resume from "../features/Resume";
import App from "../layout/App";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'resume', element: <Resume />},
        ]
    }
]

export const router = createBrowserRouter(routes)