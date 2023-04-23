const people = [{
    name: 'Lynne Sullivan',
    role: 'Regional Manager',
    imageUrl: 'https://i.imgur.com/9ax6Sz8.png',
    bio: 'Lynne is an persistent advocate for educational and criminal justice. She has experience in drug and alcohol licensing. Lynne has been involved in a variety of projects, MyTERN, New Directions, Partakers, Stone Associates, The Association for Addiction, and TIMBo.She is a Peer Support practitioner trained in Trauma-informed techniques.',

},]


export default function Home() {

    return (<div>
        <main>
            <div className="mx-auto max-w-xl px-2">
                <div className="rounded py-0 lg:py-10">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6">
                        <ul
                            role="list"
                            className="mx-auto mb-6 mt-6 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20"
                        >
                            {people.map((person) => (<li key={person.name}>
                                <img className="h-60 w-auto rounded" src={person.imageUrl} alt=""/>

                                <h3 className="mt-4  text-xl font-semibold leading-8 text-gray-900">{person.name}</h3>
                                <p className="leading-7 text-gray-700">{person.role}</p>
                                <p className="mt-4 leading-7 text-gray-600">{person.bio}</p>
                            </li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>

    </div>)
}
