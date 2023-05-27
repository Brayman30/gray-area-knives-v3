import nuxtConfig from "./nuxt.config.js";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    plugins: [
        require("tailwind-children", "@tailwindcss/typography"),
        plugin(function ({ addComponents, theme }) {
            addComponents({
                ".router-link-active": {
                    textDecoration: theme("underline"),
                    fontWeight: theme("font-semibold"),
                    color: theme("primary.500"),
                },
            });
        }),
    ],
    theme: {
        extend: {
            minHeight: {
                "4/5": "80%",
            },
        },
        colors: {
            gray: {
                50: "#f7f7f7",
                100: "#e0e0e0",
                200: "#c2c2c2",
                300: "#9c9c9c",
                400: "#757575",
                500: "#595959",
                600: "#424242",
                700: "#303030",
                800: "#242424",
                900: "#1a1a1a",
                950: "#000000",
            },
            warning: {
                50: "#fffdea",
                100: "#fff6c5",
                200: "#ffee85",
                300: "#ffde46",
                400: "#ffcc1b",
                500: "#ffaa00",
                600: "#e28100",
                700: "#bb5902",
                800: "#984508",
                900: "#7c380b",
                950: "#481c00",
            },
            error: {
                50: "#fff0f0",
                100: "#ffdddd",
                200: "#ffc0c0",
                300: "#ff9494",
                400: "#ff5757",
                500: "#ff2323",
                600: "#ff0000",
                700: "#d70000",
                800: "#b10303",
                900: "#920a0a",
                950: "#500000",
            },
            success: {
                50: "#f7f9f4",
                100: "#eaf3e5",
                200: "#d6e6cc",
                300: "#b4d2a3",
                400: "#8bb573",
                500: "#71a255",
                600: "#547c3d",
                700: "#436233",
                800: "#394f2c",
                900: "#2f4126",
                950: "#162310",
            },
            secondary: {
                50: "#f3faf8",
                100: "#d8efe9",
                200: "#b1ded3",
                300: "#82c6b8",
                400: "#54a295",
                500: "#3f8d82",
                600: "#307168",
                700: "#2a5b55",
                800: "#254a46",
                900: "#223f3c",
                950: "#0f2422",
            },
            primary: {
                50: "#fcf4f4",
                100: "#fae6e6",
                200: "#f6d2d2",
                300: "#efb2b3",
                400: "#e17576",
                500: "#d65d5e",
                600: "#c24041",
                700: "#a23334",
                800: "#872d2e",
                900: "#712b2c",
                950: "#3c1313",
            },
        },
        fontFamily: {
            sans: ['"DM Sans"'],
            italic: ['"Poppins"'],
        },
    },
};
