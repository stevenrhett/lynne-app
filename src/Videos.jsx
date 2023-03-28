const videos = [{
    id: 1,
    name: 'Click on photo',
    href: 'https://www.youtube.com/watch?v=AY9VLWCYl-k',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
}, {
    id: 2,
    name: 'Click on photo',
    href: 'https://www.youtube.com/watch?v=Q76mHATFyQA&list=PLflz5KJ7n6tPrMQZmEjtsZaiY-Uz9vx2h&index=1',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
}, {
    id: 3,
    name: 'Click on photo',
    href: 'https://sites.tufts.edu/tupit/partners/',
    price: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
}, {
    id: 4,
    name: 'Click on photo',
    href: 'https://www.instyle.com/lifestyle/coronavirus-prison-women-family-separation',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
},

    {
        id: 5,
        name: 'Click on photo',
        href: 'https://mymedia.bu.edu/media/t/1_0vs6b4e1',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    }, {
        id: 6,
        name: 'Click on photo',
        href: 'https://www.instyle.com/lifestyle/coronavirus-prison-women-family-separation',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
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
                    <p className="mt-1 text-lg font-medium text-gray-900">{video.price}</p>
                </a>))}
            </div>

        </div>
    </div>)
}
