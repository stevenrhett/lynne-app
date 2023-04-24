import {ScrollRestoration, Outlet, Link, useNavigation} from "react-router-dom"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import "./RootLayout.module.css"
import React from "react";

export default function RootLayout() {
    const navigation = useNavigation();

    return (
        <div>
            <ScrollRestoration/>
            {navigation.state === "loading" && <button type="button" className="bg-indigo-500">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                </svg>
                Processing...
            </button>}
            <div className="rootLayout
                absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-indigo-100 ring-1 ring-indigo-100/10">
                <svg
                    className="absolute inset-0 h-full w-full stroke-indigo-100 [mask-image:radial-gradient(100%_100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                 width={200}
                                 height={200}
                                 x="100%"
                                 y={-1}
                                 patternUnits="userSpaceOnUse"
                        >
                            <path d="M130 200V.5M.5 .5H200" fill="indigo"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth={0} fill="white"/>
                    <svg x="100%" y={-1} className="overflow-visible fill-white">
                        <path d="M-470.5 0h201v201h-201Z" strokeWidth={0}/>
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0}
                          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"/>
                </svg>
            </div>

            <Header/>
            <div className="flex ml-6 mt-1 justify-start">
                <Link to=".." className="text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24"
                         fill="currentColor"
                         className="w-6 h-6">
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                </Link>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    )
}
