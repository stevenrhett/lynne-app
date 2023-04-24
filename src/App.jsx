import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Videos from "./pages/Videos.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import RootLayout from "./RootLayout.jsx";
import Home from "./pages/Home.jsx";
import ProfileLayout from "./ProfileLayout.jsx";
import ErrorPage from "./ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "profile",
        element: <ProfileLayout />,
        children: [{ path: "contact", element: <Contact /> }],
      },
      { path: "videos", element: <Videos /> },
      { path: "resume", element: <Resume /> },
      { path: "*", errorElement: <ErrorPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
