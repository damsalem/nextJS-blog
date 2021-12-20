import { createContext } from "react";

export const themes = {
    light: {
        type: 'light',
        background: '#F4F7F9',
        fontColor: '#2b2c38',
    },
    dark: {
        type: 'dark',
        background: '#2B2C38',
        fontColor: '#dcdcdc',
    }
}

export const ThemeContext = createContext({});