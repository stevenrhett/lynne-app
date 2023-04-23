import {NavLink, Outlet} from "react-router-dom"

export default function ProfileLayout() {
    return (
        <div>

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
