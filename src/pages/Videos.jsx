const videos = [{
    id: 1,
    name: 'Youtube Video',
    href: 'https://www.youtube.com/watch?v=AY9VLWCYl-k',

    imageSrc: 'https://i.imgur.com/ZLSTHaZ.png',
    imageAlt: '',
}, {
    id: 2,
    name: 'Youtube Video',
    href: 'https://www.youtube.com/watch?v=Q76mHATFyQA&list=PLflz5KJ7n6tPrMQZmEjtsZaiY-Uz9vx2h&index=1',

    imageSrc: 'https://i.imgur.com/JQZPFfZ.png',
    imageAlt: '',
}, {
    id: 3,
    name: 'Youtube Video',
    href: 'https://sites.tufts.edu/tupit/partners/',

    imageSrc: 'https://i.imgur.com/vSgOeYu.png',
    imageAlt: '',
}, {
    id: 4,
    name: 'Youtube Video',
    href: '',

    imageSrc: 'https://i.imgur.com/AhQxbyK.png',
    imageAlt: '',
},

    {
        id: 5,
        name: 'Youtube Video',
        href: 'https://mymedia.bu.edu/media/t/1_0vs6b4e1',

        imageSrc: 'https://i.imgur.com/Axyfgxg.png',
        imageAlt: '',
    }, {
        id: 6,
        name: 'Youtube Video',
        href: 'https://www.instyle.com/lifestyle/coronavirus-prison-women-family-separation',

        imageSrc: 'https://i.imgur.com/hoPgJ4V.png',
        imageAlt: '',
    },]

export default function Videos() {
    return (<div className="bg-gray-250">
        <div className="mx-auto max-w-2xl py-8 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Videos</h2>
            <div
                className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {videos.map((video) => (<a key={video.id} href={video.href} className="group">
                    <div
                        className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <img
                            src={video.imageSrc}
                            alt={video.imageAlt}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{video.name}</h3>

                </a>))}
            </div>

        </div>
    </div>)
}
