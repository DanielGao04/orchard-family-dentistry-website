module.exports = {
    
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
        },
        container: {
            center: true,
            padding: '1rem'
        },
        extend: {
            fontFamily: {
                Poppins: "'poppins', sans-serif",
                Roboto: "'roboto' sans-serif",
                custom: ['Goudy Old Style', 'serif'],
            },
            colors: {
                'primary': '#676cb8',
                'secondary': '#3695cc',
            },
            transitionDuration: {
                '1500': '1500ms',
            },
        },
    },
    variants: {
        extend: {
            display: ['group-hover'],
            visibility: ['group-hover'],
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
    
    content: [
        "./node_modules/flowbite/**/*.js"
    ]
}