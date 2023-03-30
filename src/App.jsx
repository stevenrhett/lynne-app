import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home.jsx";
import Profile from "./Profile.jsx";
import Videos from "./Videos.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";
import RootLayout from "./RootLayout.jsx";


const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout/>,
    children: [{path: "/", element: <Home/>}, {path: "profile", element: <Profile/>}, {
        path: "videos", element: <Videos/>
    }, {path: "resume", element: <Resume/>}, {path: "contact", element: <Contact/>},],
}

]);

const App = () => {
    return (<RouterProvider router={router}/>)
}


export default App;
