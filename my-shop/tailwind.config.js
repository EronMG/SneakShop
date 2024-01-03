/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx,tsx}"];
export const mode = "jit";
export const theme = {
    extend: {
        colors: {
            dark: '#403F3D',
            light: '#E1D4C9',
            accent: '#B0907A',
            body: '#E1D4C9',
            container: '#665F55',
            backdrop: 'rgba(64, 63, 61, 0.80)',
            brdlight: '#C1B6AD',
            brddark: '#665F55',
        },
        fontFamily: {
            mono: ["Space Mono", "monospace"],
        },
    },
    screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
    },
};
export const plugins = [];