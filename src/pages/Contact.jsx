import {BuildingOffice2Icon, EnvelopeIcon, PhoneIcon} from '@heroicons/react/24/outline'

export default function Contact() {
    return (
        <div className="root-layout">
        <div className="relative isolate">
            <div className="mx-auto grid max-w-2xl grid-cols-1">
                <div className="relative px-6 pt-12 pb-10 sm:pt-16 lg:static lg:py-24 lg:px-4">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        {/*<div*/}
                        {/*    className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-indigo-100 ring-1 ring-indigo-900/10 lg:w-1/2">*/}
                        {/*    <svg*/}
                        {/*        className="absolute inset-0 h-full w-full stroke-indigo-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"*/}
                        {/*        aria-hidden="true"*/}
                        {/*    >*/}
                        {/*        <defs>*/}
                        {/*            <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"*/}
                        {/*                     width={200}*/}
                        {/*                     height={200}*/}
                        {/*                     x="100%"*/}
                        {/*                     y={-1}*/}
                        {/*                     patternUnits="userSpaceOnUse"*/}
                        {/*            >*/}
                        {/*                <path d="M130 200V.5M.5 .5H200" fill="none"/>*/}
                        {/*            </pattern>*/}
                        {/*        </defs>*/}
                        {/*        <rect width="100%" height="100%" strokeWidth={0} fill="white"/>*/}
                        {/*        <svg x="100%" y={-1} className="overflow-visible fill-indigo-50">*/}
                        {/*            <path d="M-470.5 0h201v201h-201Z" strokeWidth={0}/>*/}
                        {/*        </svg>*/}
                        {/*        <rect width="100%" height="100%" strokeWidth={0}*/}
                        {/*              fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"/>*/}
                        {/*    </svg>*/}
                        {/*</div>*/}
                        <h2 className="text-3xl font-bold tracking-tight text-indigo-900">Lynne Sullivan</h2>
                        <dl className="mt-5 space-y-4 text-base leading-7 text-indigo-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <BuildingOffice2Icon className="h-6 w-6 text-indigo-400" aria-hidden="true"/>
                                </dt>
                                <dd>
                                    Massachusetts and Rhode Island <br/>

                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon className="h-6 w-6 text-indigo-400" aria-hidden="true"/>
                                </dt>
                                <dd>
                                    <a className="hover:text-indigo-900" href="tel:+1 (555) 234-5678">
                                        +1 (555) 234-5678
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <EnvelopeIcon className="h-6 w-6 text-indigo-400" aria-hidden="true"/>
                                </dt>
                                <dd>
                                    <a className="hover:text-indigo-900" href="mailto:  lsullivan@peteygreene.org">
                                        lsullivan@peteygreene.org
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <form action="#" method="POST" className="px-6 pb-16 lg:py-24 lg:px-4">
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-y-6 gap-x-8">
                            <div>
                                <label htmlFor="name"
                                       className="block text-sm font-semibold leading-6 text-indigo-600">
                                    name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-2 px-3.5 text-indigo-900 shadow-sm ring-1 ring-inset ring-indigo-300 placeholder:text-indigo-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="message"
                                       className="block text-sm font-semibold leading-6 text-indigo-600">
                                    Message
                                </label>
                                <div className="mt-2">
                  <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-indigo-900 shadow-sm ring-1 ring-inset ring-indigo-300 placeholder:text-indigo-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                  />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Send message
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>)
}
