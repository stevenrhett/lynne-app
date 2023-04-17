import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Profile from "./pages/Profile.jsx";
import Videos from "./pages/Videos.jsx";
import Resume from "./Resume.jsx";
import Contact from "./pages/Contact.jsx";
import RootLayout from "./RootLayout.jsx";
import Home from "./pages/Home.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>
    },
    {

        index: 1,
        element: <Home/>
    },
    {
        path: "profile",
        element: <Profile/>
    },
    {
        path: "videos",
        element: <Videos/>
    },
    {
        path: "resume",
        element: <Resume/>
    },
    {
        path: "contact",
        element: <Contact/>
    }
]);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}


export default App;
