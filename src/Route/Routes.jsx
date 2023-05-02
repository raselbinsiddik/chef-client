import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Banner from "../components/Banner/Banner";
import Home from "../components/Home/Home";


// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element:<Banner></Banner>
            },
            {
                path: '/',
                element:<Home></Home>
            }
        ]
    }
])
export default router;