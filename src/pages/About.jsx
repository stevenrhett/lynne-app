import {useState} from "react";


export default function About() {
    // const [items] = useState([{
    //     name: 'MyTERN', href: 'https://tischcollege.tufts.edu/tufts-university-prison-initiative-tisch-college',
    // }, {
    //     name: 'New Directions',
    //     href: 'https://www.trentondaily.com/commencement-for-the-inaugural-class-of-the-new-direction-project-was-transformative/'
    // }, {name: 'Partakers', href: 'https://partakers.org/'},
    //
    //
    //     {
    //         name: 'Stone Associates', href: 'https://www.linkedin.com/company/stone-associates-trust/about/'
    //     },
    //
    //     {name: 'The Association for Addiction', href: 'https://www.naadac.org/'}, {
    //         name: 'TIMBo', href: 'https://yogahope.org/'
    //     }
    //
    // ])
    return (
        <div className="root-layout">
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>)
}
