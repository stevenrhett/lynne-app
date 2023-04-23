import React from 'react';

const person = [{
    email: 'sullivan@peteygreene.org',
    twitterUrl: 'https://www.twitter.com',
    linkedinUrl: 'https://www.linkedin.com/in/lynne-sullivan-a4b076b5/',
},]
export default function Footer() {
    return (<div className="bg-gray-50">
        <footer>
            <div className="mx-auto max-w-3xl px-6 lg:max-w-2xl lg:px-8">
                <div className="flex justify-center">
                    <ul role="list" className="mt-4 flex gap-x-6">
                        <li>
                            <a href={person.twitterUrl}
                               className="text-indigo-600 hover:text-gray-900">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" aria-hidden="true" fill="currentColor"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href={person.linkedinUrl}
                               className="text-indigo-600 hover:text-gray-900">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" aria-hidden="true" fill="currentColor"
                                     viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href={person.email}
                               className="text-indigo-600 hover:text-gray-900">
                                <span className="sr-only">Email</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                     fill="currentColor" className="w-6 h-6">
                                    <path
                                        d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                                    <path
                                        d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                                </svg>

                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mt-2 border-t border-gray-400 py-8 text-center text-md text-indigo-600">
                    <span className="flex-1">&copy; 2023, Lynne Sullivan</span>{' '}
                    <span className="flex-1">All rights reserved</span><br/>
                    <span className="flex-1">Created by: stevenrhett.com</span>
                </div>
            </div>
        </footer>

    </div>);
};

