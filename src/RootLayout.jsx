import React from 'react';
import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.jsx";

const RootLayout = () => {
    return (<React.Fragment>
            <Header/>
            <Outlet/>
            <Footer/>
        </React.Fragment>

    );
};

export default RootLayout;
