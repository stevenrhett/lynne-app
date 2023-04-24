import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Videos from "./pages/Videos.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import RootLayout from "./RootLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ProfileLayout from "./ProfileLayout.jsx";
import {contactAction} from "./pages/ContactPage.jsx";
import ErrorPage from "./ErrorPage.jsx";
import PageError from "./pages/PageError.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        error: <ErrorPage/>,
        children: [
            {index: true, element: <Home/>},
            {path: "profile", element: <ProfileLayout/>},
            [
                {path: "about", element: <About/>},
                {path: "contact", action: {contactAction}, element: <Contact/>},
            ],

            {path: "video", element: <Videos/>},
            {path: "resume", element: <Resume/>},
            {path: "*", element: <PageError/>},
        ],
    },


]);

const App = () => {
    return <RouterProvider router={router}/>
}


export default App;
