import {
    createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from "react-router-dom";
import Videos from "./pages/Videos.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import RootLayout from "./RootLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import PageError from "./pages/PageError.jsx";
import ProfileLayout from "./ProfileLayout.jsx";
import {contactAction} from "./pages/ContactPage.jsx";

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="profile" element={<ProfileLayout />}>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>} action={contactAction} />
    </Route>
    <Route path="videos" element={<Videos/>}/>
    <Route path="resume" element={<Resume/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="*" element={<PageError/>}/>
    </Route>
))

    function App() {return (
    <RouterProvider router={router} />)
}
export default App;
