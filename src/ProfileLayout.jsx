import {Link, NavLink, Outlet} from "react-router-dom"
import React from "react";

export default function ProfileLayout() {
    return (
        <div>
            {/*<div className="flex ml-4 mt-2 justify-start">*/}
            {/*    <Link to=".." className="text-indigo-600">*/}
            {/*<svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*     viewBox="0 0 24 24"*/}
            {/*     fill="currentColor"*/}
            {/*     className="w-6 h-6">*/}
            {/*    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />*/}
            {/*    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />*/}
            {/*</svg>*/}
            {/*    </Link>*/}
            {/*</div>*/}


            <Outlet/>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Prison to Grad School</h1>
                    <div>
                        <p className="mt-4 text-md text-gray-800">
                            With over 15 years of experience in the criminal justice system and prison
                            education, Lynne Sullivan is a passionate advocate for providing
                            high-quality education to system-impacted individuals. She graduated with
                            honors from the Boston University Prison Education Program in 2009, earning
                            a bachelor's degree in sociology, and went on to become the Regional Manager
                            for the Petey Greene Program in Massachusetts and Rhode Island. In this
                            role, she oversees academic support for incarcerated individuals in several
                            correctional facilities, community correctional centers, youth centers, and
                            reentry programs.
                        </p>
                        <p className="mt-2 text-md text-gray-800">
                            Lynne's personal journey as a first-generation college graduate fuels her
                            belief that education is the key to ending mass incarceration. In her words,
                            "Education gives a person options, the option to choose different paths in
                            life, the option to be who they never thought they could be." In 2021, Lynne
                            earned a master's degree in criminal justice from Boston University, further
                            solidifying her expertise in the field.
                        </p>
                    </div>
                    <div className="mb-4 ml-20 justify-between space-x-2">
                    <button className="justify-center btn btn-outline btn-primary"><NavLink to="about">About</NavLink></button>
                    <button className="justify-center btn btn-outline btn-primary"> <NavLink to="contact">Contact Us</NavLink></button>
                    </div>
                </div>
            </div>



        </div>)
}
