import {Fragment} from 'react'
import "./Home.module.css"
import lynne from "./assets/lynne.png"
// import lynne2 from "./assets/lynne-2.png"
import {Popover, Transition} from '@headlessui/react'
import {
    BanknotesIcon,
    Bars3Icon,
    BellIcon,
    CheckBadgeIcon,
    ClockIcon,
    ReceiptRefundIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid'
import {Link} from "react-router-dom";

const user = {
    name: 'Lynne Sullivan',
    email: 'sullivan@peteygreene.org',
    role: 'Regional Manager: Petey Greene Program - MA',


}
const navigation = [
    {name: 'Home', href: '/', current: false},
    {name: 'Profile', href: '/profile', current: false},
    {name: 'Videos', href: '#', current: false},
    {name: 'Resume', href: '#', current: false},
    {name: 'Contact', href: '#', current: false},
]
// const userNavigation = [
//     {name: 'Your Profile', href: '#'},
//     // {name: 'Settings', href: '#'},
//     // {name: 'Sign out', href: '#'},
// ]
const stats = [
    {label: 'Reform Advocate'},
    {label: 'Drug and Alcohol Licensing'},
    {label: 'NEBHE commission'},
]
const actions = [
    {
        icon: ClockIcon,
        name: 'MyTERN',
        href: '#',
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
    },
    {
        icon: CheckBadgeIcon,
        name: 'New Directions',
        href: '#',
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-purple-50',
    },
    {
        icon: UsersIcon,
        name: 'Partakers',
        href: '#',
        iconForeground: 'text-sky-700',
        iconBackground: 'bg-sky-50',
    },
    {
        icon: BanknotesIcon,
        name: 'Stone Associates',
        href: '#',
        iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50',
    },
    {
        icon: ReceiptRefundIcon,
        name: 'The Association for Addiction',
        href: '#',
        iconForeground: 'text-rose-700',
        iconBackground: 'bg-rose-50',
    },
    {
        icon: ReceiptRefundIcon,
        name: 'The Association for Addiction',
        href: '#',
        iconForeground: 'text-rose-700',
        iconBackground: 'bg-rose-50',
    },
]

const announcements = [
    {
        id: 1,
        title: 'Peer Support practitioner and trained in Trauma-informed techniques',
        href: '#',
        preview:
            'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
    },
    {
        id: 2,
        title: '',
        href: '#',
        preview:
            'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
    },
    {
        id: 3,
        title: '',
        href: '#',
        preview:
            'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Home() {
    return (
        <>

            <div className="min-h-full">
                <Popover as="header" className="bg-gradient-to-r from-purple-300 to-cyan-400 pb-24">
                    {({open}) => (
                        <>
                            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
                                    {/* Logo */}
                                    <div className="absolute left-0 flex-shrink-0 py-5 lg:static">
                                        <a href="#">
                                            <span className="sr-only"></span>
                                            {/*<img*/}
                                            {/*    className="h-8 w-auto"*/}
                                            {/*    src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=200"*/}
                                            {/*    alt=""*/}
                                            {/*/>*/}
                                        </a>
                                    </div>

                                    {/* Right section on desktop */}
                                    <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
                                        {/*<button*/}
                                        {/*    type="button"*/}
                                        {/*    className="flex-shrink-0 rounded-full p-1 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"*/}
                                        {/*>*/}
                                        {/*    <span className="sr-only">View notifications</span>*/}
                                        {/*    <BellIcon className="h-6 w-6" aria-hidden="true"/>*/}
                                        {/*</button>*/}

                                        {/* Profile dropdown */}
                                        {/*<Menu as="div" className="relative ml-4 flex-shrink-0">*/}
                                        {/*    <div>*/}
                                        {/*        <Menu.Button*/}
                                        {/*            className="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">*/}
                                        {/*            <span className="sr-only">Open user menu</span>*/}
                                        {/*            <img className="h-8 w-8 rounded-full" src={lynne} alt=""/>*/}
                                        {/*        </Menu.Button>*/}
                                        {/*    </div>*/}
                                        {/*    <Transition*/}
                                        {/*        as={Fragment}*/}
                                        {/*        leave="transition ease-in duration-75"*/}
                                        {/*        leaveFrom="transform opacity-100 scale-100"*/}
                                        {/*        leaveTo="transform opacity-0 scale-95"*/}
                                        {/*    >*/}
                                        {/*        /!*<Menu.Items*!/*/}
                                        {/*        /!*    className="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">*!/*/}
                                        {/*        /!*    {userNavigation.map((item) => (*!/*/}
                                        {/*        /!*        <Menu.Item key={item.name}>*!/*/}
                                        {/*        /!*            {({active}) => (*!/*/}
                                        {/*        /!*                <a*!/*/}
                                        {/*        /!*                    href={item.href}*!/*/}
                                        {/*        /!*                    className={classNames(*!/*/}
                                        {/*        /!*                        active ? 'bg-gray-100' : '',*!/*/}
                                        {/*        /!*                        'block px-4 py-2 text-sm text-gray-700'*!/*/}
                                        {/*        /!*                    )}*!/*/}
                                        {/*        /!*                >*!/*/}
                                        {/*        /!*                    {item.name}*!/*/}
                                        {/*        /!*                </a>*!/*/}
                                        {/*        /!*            )}*!/*/}
                                        {/*        /!*        </Menu.Item>*!/*/}
                                        {/*        /!*    ))}*!/*/}
                                        {/*        /!*</Menu.Items>*!/*/}
                                        {/*    </Transition>*/}
                                        {/*</Menu>*/}
                                    </div>

                                    <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                                        <div className="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
                                            {/* Left nav */}
                                            <div className="hidden text-gray-600 lg:col-span-2 lg:block">
                                                <nav className="flex space-x-4">
                                                    {navigation.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current ? 'text-gray-600' : 'text-gray-600',
                                                                'rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10'
                                                            )}
                                                            aria-current={item.current ? 'page' : undefined}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    ))}
                                                </nav>
                                            </div>
                                            <div className="px-12 lg:px-0">
                                                {/* Search */}
                                                <div className="mx-auto w-full max-w-xs lg:max-w-md">
                                                    <label htmlFor="search" className="sr-only">
                                                        Search
                                                    </label>
                                                    <div className="relative text-gray-600 focus-within:text-gray-600">
                                                        <div
                                                            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <MagnifyingGlassIcon className="h-5 w-5"
                                                                                 aria-hidden="true"/>
                                                        </div>
                                                        <input
                                                            id="search"
                                                            className="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-gray-600 placeholder:text-gray-600 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                                                            placeholder="Search"
                                                            type="search"
                                                            name="search"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Menu button */}
                                    <div className="absolute right-0 flex-shrink-0 lg:hidden">
                                        {/* Mobile menu button */}
                                        <Popover.Button
                                            className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-600 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                            )}
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>

                            <Transition.Root as={Fragment}>
                                <div className="lg:hidden">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="duration-150 ease-out"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="duration-150 ease-in"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25"/>
                                    </Transition.Child>

                                    <Transition.Child
                                        as={Fragment}
                                        enter="duration-150 ease-out"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="duration-150 ease-in"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Popover.Panel
                                            focus
                                            className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
                                        >
                                            <div
                                                className="divide-y divide-gray-200 rounded-lg bg-gradient-to-r from-purple-300 to-cyan-500 shadow-lg ring-1 ring-black ring-opacity-5">
                                                <div className="pt-3 pb-2">
                                                    <div className="flex items-center justify-between px-4">

                                                        <div className="-mr-2">
                                                            <Popover.Button
                                                                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                                                <span className="sr-only">Close menu</span>
                                                                <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                                            </Popover.Button>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 space-y-1 px-2">
                                                        {navigation.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                                            >
                                                                {item.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="pt-4 pb-2">
                                                    <div className="flex items-center px-5">
                                                        <div className="flex-shrink-0">
                                                            <img className="h-10 w-10 rounded-full" src={lynne} alt=""/>
                                                        </div>
                                                        <div className="ml-3 min-w-0 flex-1">
                                                            <div
                                                                className="truncate text-base font-medium text-gray-800">{user.name}</div>
                                                            <div
                                                                className="truncate text-sm font-medium text-gray-500">{user.email}</div>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                                        >
                                                            <span className="sr-only">View notifications</span>
                                                            <BellIcon className="h-6 w-6" aria-hidden="true"/>
                                                        </button>
                                                    </div>
                                                    {/*<div className="mt-3 space-y-1 px-2">*/}
                                                    {/*    {userNavigation.map((item) => (*/}
                                                    {/*        <a*/}
                                                    {/*            key={item.name}*/}
                                                    {/*            href={item.href}*/}
                                                    {/*            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"*/}
                                                    {/*        >*/}
                                                    {/*            {item.name}*/}
                                                    {/*        </a>*/}
                                                    {/*    ))}*/}
                                                    {/*</div>*/}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition.Child>
                                </div>
                            </Transition.Root>
                        </>
                    )}
                </Popover>
                <main className="bg-gradient-to-r from-purple-300 to-cyan-400 -mt-24 pb-8">
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
                                            {stats.map((stat) => (
                                                <div key={stat.label}
                                                     className="px-6 py-5 text-center text-sm font-medium">
                                                    <span className="text-gray-900">{stat.value}</span>{' '}
                                                    <span className="text-gray-600">{stat.label}</span>
                                                </div>
                                            ))}
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
                                        {actions.map((action, actionIdx) => (
                                            <div
                                                key={action.name}
                                                className={classNames(
                                                    actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                                                    actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                                                    actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                                                    actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                                                    'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500'
                                                )}
                                            >
                                                <div>
                          <span
                              className={classNames(
                                  action.iconBackground,
                                  action.iconForeground,
                                  'inline-flex rounded-lg p-3 ring-4 ring-white'
                              )}
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
                                                        Doloribus dolores nostrum quia qui natus officia quod et
                                                        dolorem. Sit repellendus qui ut at
                                                        blanditiis et quo et molestiae.
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
                                            </div>
                                        ))}
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
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="mt-6">
                                                <a
                                                    href="#"
                                                    className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                >
                                                    View all
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </section>


                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
                            <span className="block sm:inline">&copy; 2023, Lynne Sullivan</span>{' '} <br/>
                            <span className="block sm:inline">All rights reserved.</span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
