import './index.css'
import {BrowserRouter as Router, createBrowserRouter, Route, RouterProvider} from "react-router-dom";
import Profile from "./pages/Profile.jsx";
import Videos from "./pages/Videos.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import RootLayout from "./RootLayout.jsx";
import Home from "./pages/Home.jsx";



const router = createBrowserRouter([

    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "profile", element: <Profile/>},
            {path: "videos", element: <Videos/>},
            {path: "contact", element: <Contact/>},
            {path: "resume", element: <Resume/>}

        ]
    },


]);

const App = () => {
    return (<RouterProvider router={router}/>)
}


export default App;
