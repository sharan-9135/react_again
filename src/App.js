import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./components/Navbar"
import { Product } from "./components/Product"
import { createBrowserRouter, RouterProvider, Outlet, useRouteError } from "react-router-dom"
import Kid from "./components/Kid"
import Men from "./components/Men"
import Women from "./components/Women"
import Error from "./components/Error"


const App = () => {
    return <div>
        <Navbar />
        <Outlet />
    </div>
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Product />
            },
            {
                path: '/kid',
                element: <Kid />
            },
            {
                path: '/Men',
                element: <Men />
            },
            {
                path: '/Women',
                element: <Women />
            }
        ],
        errorElement:<Error/>
    },


])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />);







