/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('prettier-plugin-tailwindcss'),
        require('@tailwindcss/forms'),
        require("daisyui")

    ],
}
