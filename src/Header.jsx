import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline/index.js";
import {useState} from "react";
import {Dialog} from "@headlessui/react";

const navigation = [{name: 'Home', href: '/', current: false}, {
    name: 'Profile', href: '/profile', current: false
}, {
    name: 'Resume', href: '/resume', current: false
}, {name: 'videos', href: '/videos', current: false},];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-gray-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-indigo-600"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-indigo-600">
                        {item.name}
                    </a>))}
            </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10"/>
            <Dialog.Panel
                className="fixed bg-base-100 inset-y-0 right-0 z-10 w-fit h-fit overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-indigo/10">
                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-indigo-600"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-indigo-600/50">
                        <div className="space-y-2 py-6">
                            {navigation.map((item) => (<a
                                key={item.name}
                                href={item.href}
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-indigo-600 hover:bg-indigo-100"
                            >
                                {item.name}
                            </a>))}
                        </div>
                    </div>
                </div>
            </Dialog.Panel>
        </Dialog>
    </header>)
}
