import {BuildingOffice2Icon, EnvelopeIcon, PhoneIcon} from '@heroicons/react/24/outline'
import {Form} from "react-router-dom";

export default function Contact() {
    return (
        <div className="root-layout">
        <div className="relative isolate">
            <div className="mx-auto grid max-w-2xl grid-cols-1">
                <div className="relative px-6 pt-12 pb-10 sm:pt-16 lg:static lg:py-24 lg:px-4">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">

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
                <Form action="#" method="POST" className="px-6 pb-16 lg:py-24 lg:px-4">
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
                </Form>

            </div>
        </div>
    </div>)
}

