import React, {Fragment, useState} from 'react';
import {Popover, Transition} from "@headlessui/react";
import {Link, NavLink} from "react-router-dom";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid/index.js";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline/index.js";

const navigation = [{name: 'Home', href: '/', current: false}, {
    name: 'About', href: '/about', current: false
}, {name: 'Projects', href: '/profile', current: false}, {
    name: 'Contact', href: '/contact', current: false
}, {name: 'Resume', href: '/resume', current: false},];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [isOpen] = useState(false);
    console.log(isOpen);
    const [anchorEl, setAnchorEl] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (<>
        <div className="min-h-full">
            <Popover as="header" className="bg-gradient-to-r from-pink-200 to-yellow-300 pb-24">
                {({open}) => (<>

                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div
                            className="relative flex flex-wrap items-center justify-center lg:justify-between">
                            {/* Logo */}
                            <div className="absolute left-0 flex-shrink-0 py-5 lg:static">
                                <a href="#">
                                    <span className="sr-only"></span>
                                </a>
                            </div>


                            {/* Right section on desktop */}
                            <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
                                {/*<button*/}

                            </div>

                            <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                                <div className="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
                                    {/* Left nav */}
                                    <div className="hidden text-gray-600 lg:col-span-2 lg:block">
                                        <nav className="flex space-x-4">
                                            {navigation.map((item) => (<Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-100' : 'text-gray-600',
                                                    'block px-3 py-2 rounded-md text-base font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}>
                                                <NavLink onClick={handleClick}
                                                         to={item.href}>{item.name}</NavLink>
                                            </Link>))}
                                        </nav>
                                    </div>
                                    <div className="px-12 lg:px-0">
                                        {/* Search */}
                                        <div className="mx-auto w-full max-w-xs lg:max-w-md">
                                            <label htmlFor="search" className="sr-only">
                                                Search
                                            </label>
                                            <div
                                                className="relative text-gray-600 focus-within:text-gray-600">
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
                                    className="inline-flex items-center justify-center rounded-md  p-2 text-gray-600 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {isOpen ? (<XMarkIcon className="block h-6 w-6" aria-hidden="true"/>) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>)}
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
                                <Popover.Overlay className="fixed inset-0 z-30 bg-black bg-opacity-25 p-2"/>
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
                                        className="divide-y divide-gray-200 rounded-lg bg-gradient-to-r from-pink-200 to-yellow-300 ring-1 ring-black ring-opacity-5">
                                        <div className="pt-3 pb-2">
                                            <div className="flex items-center justify-between px-4">
                                                <div
                                                    className="absolute p-6 mt-9 -mr-2 right-0 flex-shrink-0 lg:hidden">
                                                    <Popover.Button
                                                        className="inline-flex items-center justify-center p-2 rounded-md  text-gray-600 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                                        <span className="sr-only">Close menu</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                                    </Popover.Button>
                                                </div>
                                            </div>
                                            <div className="mt-12 space-y-1 px-2">
                                                <Link
                                                    to="/"
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                                    Home
                                                </Link>
                                                <Link
                                                    to="/about"
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                                    About
                                                </Link>
                                                <Link
                                                    to="/profile"
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                                    Projects
                                                </Link>
                                                <Link
                                                    to="/resume"
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                                    Blog
                                                </Link>
                                                <Link
                                                    to="/contact"
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                                    Blog
                                                </Link>
                                                <Link
                                                    to="/videos"
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                                    Blog
                                                </Link>


                                                {/*{navigation.map((item) => (<Link*/}

                                                {/*    key={item.name}*/}
                                                {/*    to={item.href}*/}
                                                {/*    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"*/}
                                                {/*>*/}
                                                {/*    <NavLink onClick={handleClick}*/}
                                                {/*             to={item.href}>{item.name}</NavLink>*/}
                                                {/*</Link>))}*/}
                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition.Child>
                        </div>
                    </Transition.Root>
                </>)}
            </Popover>
        </div>
        {/*}*/}
    </>)

}
