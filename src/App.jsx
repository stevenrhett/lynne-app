import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home.jsx";
import Profile from "./Profile.jsx";


const router = createBrowserRouter([



    {path: "/", element: <Home/>},
    {path: "profile", element: <Profile/>},
    ])
;

const App = () => {
    return (<RouterProvider router={router}/>)
}


export default App;
