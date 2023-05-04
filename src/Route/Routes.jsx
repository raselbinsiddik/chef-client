import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Banner from "../components/Banner/Banner";
import Home from "../components/Home/Home";
import Recipe from "../components/Recipe/Recipe";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import NotFoun from "../components/NotFound/NotFoun";
import Blog from "../components/Blog/Blog";
import Private from "../components/Private/Private";

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
                element: <Private><Recipe></Recipe></Private>,
                loader: ({ params }) => fetch(`https://the-chef-server1-raselbinsiddik.vercel.app/chef/${params.id}`)
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'register',
                element:<Register></Register>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            }
            
        ]
    },
    {
        path: '*',
        element: <NotFoun></NotFoun>
    }

])
export default router;