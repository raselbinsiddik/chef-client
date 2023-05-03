import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Banner from "../components/Banner/Banner";
import Home from "../components/Home/Home";
import Recipe from "../components/Recipe/Recipe";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Footer from "../components/Footer/Footer";


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
            },
           
            {
                path: 'recipe/:id',
                element: <Recipe></Recipe>,
                loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'register',
                element:<Register></Register>
            }
        ]
    }
])
export default router;