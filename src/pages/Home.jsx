import "../Home.module.css"
import lynne from "../assets/lynne.png"
import {BanknotesIcon, CheckBadgeIcon, ClockIcon, ReceiptRefundIcon, UsersIcon,} from '@heroicons/react/24/outline'
import {Link} from "react-router-dom";

const user = {
    name: 'Lynne Sullivan', email: 'sullivan@peteygreene.org', role: 'Regional Manager: Petey Greene Program - MA & RI',


}

const stats = [{label: ' Advocate for Educational Justice and Criminal Justice'}, {label: 'Drug and Alcohol Licensing'}, {label: 'NEBHE commission board member'},]
const actions = [{
    icon: ClockIcon,
    name: 'MyTERN',
    href: 'https://tischcollege.tufts.edu/tufts-university-prison-initiative-tisch-college',
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
}, {
    icon: CheckBadgeIcon,
    name: 'New Directions',
    href: 'https://www.trentondaily.com/commencement-for-the-inaugural-class-of-the-new-direction-project-was-transformative/',
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
}, {
    icon: UsersIcon,
    name: 'Partakers',
    href: 'https://partakers.org/',
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
}, {
    icon: BanknotesIcon,
    name: 'Stone Associates',
    href: 'https://www.linkedin.com/company/stone-associates-trust/about/',
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
}, {
    icon: ReceiptRefundIcon,
    name: 'The Association for Addiction',
    href: 'https://www.naadac.org/',
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
}, {
    icon: ReceiptRefundIcon,
    name: 'TIMBo',
    href: 'https://yogahope.org/',
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
},]

const announcements = [{
    id: 1,
    title: 'Peer Support practitioner and trained in Trauma-informed techniques',
    href: '#',
    preview: 'Trauma Informed Peer Support takes peer support to the next level by supporting ' + 'people with lived experience and/or peer support workers achieve a greater understanding' + 'to respond to trauma.'
}, {
    id: 2,
    title: '',
    href: '#',
    preview: 'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
}, {
    id: 3,
    title: '',
    href: '#',
    preview: 'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
},]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Home() {
    return (<>

        <div className="min-h-full">
            {/*</Popover>*/}
            <main className="bg-gray-250 -mt-24 pb-8">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="sr-only">Profile</h1>
                    {/* Main 3 column grid */}
                    <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                        {/* Left column */}
                        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                            {/* Welcome panel */}
                            <section aria-labelledby="profile-overview-title">
                                <div className="overflow-hidden rounded-lg bg-white shadow">
                                    <h2 className="sr-only" id="profile-overview-title">
                                        Profile Overview
                                    </h2>
                                    <div className="bg-white p-6">
                                        <div className="sm:flex sm:items-center sm:justify-between">
                                            <div className="sm:flex sm:space-x-5">
                                                <div className="flex-shrink-0">
                                                    <img className="mx-auto h-20 w-20 rounded-full"
                                                         src={lynne} alt=""/>
                                                </div>
                                                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                                    <p className="text-sm font-medium text-gray-600">
                                                        {/*welcome Back,*/}

                                                    </p>
                                                    <p className="text-xl font-bold text-gray-900 sm:text-2xl">{user.name}</p>
                                                    <p className="text-sm font-medium text-gray-600">{user.role}</p>
                                                </div>
                                            </div>
                                            <div className="mt-5 flex justify-center sm:mt-0">
                                                <Link to="/profile"
                                                      className="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                >
                                                    View profile
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                                        {stats.map((stat) => (<div key={stat.label}
                                                                   className="px-6 py-5 text-center text-sm font-medium">
                                            <span className="text-gray-900">{stat.value}</span>{' '}
                                            <span className="text-gray-600">{stat.label}</span>
                                        </div>))}
                                    </div>
                                </div>
                            </section>

                            {/* Actions panel */}
                            <section aria-labelledby="quick-links-title">
                                <div
                                    className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                                    <h2 className="sr-only" id="quick-links-title">
                                        Quick links
                                    </h2>
                                    {actions.map((action, actionIdx) => (<div
                                        key={action.name}
                                        className={classNames(actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', actionIdx === 1 ? 'sm:rounded-tr-lg' : '', actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '', actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500')}
                                    >
                                        <div>
                          <span
                              className={classNames(action.iconBackground, action.iconForeground, 'inline-flex rounded-lg p-3 ring-4 ring-white')}
                          >

                          </span>
                                        </div>
                                        <div className="mt-8">
                                            <h3 className="text-lg font-medium">
                                                <a href={action.href} className="focus:outline-none">
                                                    {/* Extend touch target to entire panel */}
                                                    <span className="absolute inset-0" aria-hidden="true"/>
                                                    {action.name}
                                                </a>
                                            </h3>
                                            <p className="mt-2 text-sm text-gray-500">

                                            </p>
                                        </div>
                                        <span
                                            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                                            aria-hidden="true"
                                        >
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"/>
                          </svg>
                        </span>
                                    </div>))}
                                </div>
                            </section>
                        </div>

                        {/* Right column */}
                        <div className="grid grid-cols-1 gap-4">
                            {/* Announcements */}
                            <section aria-labelledby="announcements-title">
                                <div className="overflow-hidden rounded-lg bg-white shadow">
                                    <div className="p-6">
                                        <h2 className="text-base font-medium text-gray-900"
                                            id="announcements-title">
                                            Announcements
                                        </h2>
                                        <div className="mt-6 flow-root">
                                            <ul role="list" className="-my-5 divide-y divide-gray-200">
                                                {announcements.map((announcement) => (
                                                    <li key={announcement.id} className="py-5">
                                                        <div
                                                            className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                                                            <h3 className="text-sm font-semibold text-gray-800">
                                                                <a href={announcement.href}
                                                                   className="hover:underline focus:outline-none">
                                                                    {/* Extend touch target to entire panel */}
                                                                    <span className="absolute inset-0"
                                                                          aria-hidden="true"/>
                                                                    {announcement.title}
                                                                </a>
                                                            </h3>
                                                            <p className="mt-1 text-sm text-gray-600 line-clamp-2">{announcement.preview}</p>
                                                        </div>
                                                    </li>))}
                                            </ul>
                                        </div>
                                        <div className="mt-6">
                                            <Link
                                                to="/announcements"
                                                className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                            >
                                                View all
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>


                        </div>
                    </div>
                </div>
            </main>

        </div>
    </>)
}
