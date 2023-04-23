import {LockClosedIcon} from '@heroicons/react/20/solid'

export default function Resume() {
    return (
        <div className="root-layout">

        <div className="relative">
            <div className="mx-auto max-w-2xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
                <div
                    className="lg:flex lg:w-1/2 lg:shrink lg:grow-0">
                    <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                        <img
                            className="absolute h-full w-full object-contain"
                            src='https://i.imgur.com/E66QEkp.png'
                            alt=""
                        />
                    </div>
                </div>
                <div className="px-6">
                    <div
                        className="mx-auto max-w-2xl sm:pt-20 sm:pb-16 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                        <p className="font-semibold leading-7 text-gray-600">Lynne Sullivan</p>
                        <p className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                            "NAME<br/>
                            Address | Phone | Email<br/>
                            OBJECTIVE<br/>
                            <br/>
                            To get started right away, just tap any placeholder text (such as this) and start
                            typing."
                        </p>
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                            <p>
                                EXPERIENCE<br/>
                                Name of Employer
                                <br/>
                                Job Title | Dates of Employment<br/>
                                This is the place for a brief summary of your key responsibilities and most stellar
                                accomplishments.
                                <br/>
                                To easily apply any text formatting you see in this document with just a tap, on the
                                Home tab of the ribbon, check out Styles. This text uses the List Bullet style.
                                EDUCATION<br/>
                                You might want to include your GPA here and a brief summary of relevant coursework,
                                awards, and honors.
                                AWARDS AND ACKNOWLEDGEMENTS<br/>
                                <br/>
                                You delivered that big presentation to rave reviews. Don’t be shy about it now! This
                                is
                                the place to show how well you work and play with others.
                                <br/>
                                Are you president of your fraternity or sorority, head of the condo board, or a team
                                lead for your favorite charity? You’re a natural leader–tell it like it is!

                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                                    aria-hidden="true"/>
                                    <span>
                    <strong className="font-semibold text-gray-900">Advocate for Educational Justice and Criminal Justice</strong>
                                        </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
