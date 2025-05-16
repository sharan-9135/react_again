import React, { lazy, Suspense, useState } from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./components/Navbar"
import { Product } from "./components/Product"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
// import Kid from "./components/Kid"
import Men from "./components/Men"
import Women from "./components/Women"
import Error from "./components/Error"
import ProductDetails from "./components/ProductDetails"
import Skeleton from "./components/Skeleton"
import CompoA from "./components/CompoA"
import { userContext } from "./utils/userContext"
// import Grocery from "./components/Grocery"
const Grocery = lazy(() => import('./components/Grocery')) // this will make another bundle for grocery component.
const Kid = lazy(() => import('./components/Kid'))


const App = () => {
const [user,setUser] = useState("priyesh gupta")
    return (
        <userContext.Provider value = {{name : user ,setUser}}>
        {/* with the help of this we wrap all my app with userContext and we can use anywhere 
        in our app. we are modifying the usercontext with help of value = {{name : user ,setUser}} */}
            <div>
                <Navbar />
                {/* <CompoA/> */}
                <Outlet />
            </div>
        </userContext.Provider>

    )
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
                element: <Suspense fallback={<h1>Kid items...</h1>}><Kid /></Suspense>
            },
            {
                path: '/Men',
                element: <Men />
            },
            {
                path: '/Women',
                element: <Women />
            },
            {
                path: '/product/:productId',
                element: <ProductDetails />
            },
            {
                path: '/Grocery',
                element: <Suspense fallback={<Skeleton />}><Grocery /></Suspense>
            }
        ],
        errorElement: <Error />
    },


])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />);







