import {ScrollRestoration, Outlet} from "react-router-dom"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import "./RootLayout.module.css"


export default function RootLayout() {
    return (
        <div>
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
            <ScrollRestoration/>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>)
}
