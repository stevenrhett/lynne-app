import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Profile() {
    return (
        <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
            <svg
                viewBox="0 0 801 1036"
                aria-hidden="true"
                className="absolute -top-80 left-[max(6rem,33%)] -z-10 w-[50.0625rem] transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
            >
                <path
                    fill="url(#bba7d695-d9bb-4e8a-a43b-2b951b4ac9c0)"
                    fillOpacity=".3"
                    d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.653 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
                />
                <defs>
                    <linearGradient
                        id="bba7d695-d9bb-4e8a-a43b-2b951b4ac9c0"
                        x1="508.179"
                        x2="-28.677"
                        y1="-116.221"
                        y2="1091.63"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#9089FC" />
                        <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <p className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Deploy faster</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">
                        Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                        aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
                        egestas fringilla sapien.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
                    <div className="relative lg:order-last lg:col-span-5">
                        <svg
                            className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                                    width={200}
                                    height={200}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path d="M0.5 0V200M200 0.5L0 0.499983" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" />
                        </svg>
                        <figure className="border-l border-indigo-600 pl-8">
                            <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                                <p>
                                    “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus purus. Lectus nibh ullamcorper ac
                                    dictum justo in euismod. Risus aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
                                    tristique.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-8 flex gap-x-4">
                                <img
                                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                    className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                                />
                                <div className="text-sm leading-6">
                                    <div className="font-semibold text-gray-900">Brenna Goyette</div>
                                    <div className="text-gray-600">@brenna</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
                        <p>
                            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                            vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                            erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                            sed amet vitae sed turpis id.
                        </p>
                        <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                            <li className="flex gap-x-3">
                                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                <span>
                  <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                  blanditiis ratione.
                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                <span>
                  <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                  ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </span>
                            </li>
                            <li className="flex gap-x-3">
                                <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                <span>
                  <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                  vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                            fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                            adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                        </p>
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
                        <p className="mt-6">
                            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                            tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                            turpis ipsum eu a sed convallis diam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
