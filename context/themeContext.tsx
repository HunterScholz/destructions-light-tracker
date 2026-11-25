'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { bookinsanity, zatanna, nodesto, scalySans } from '../fonts';


// create a type for your props
type ThemeContextProps = {
    darkMode: boolean,
    setDarkMode: (value: boolean) => void
}



// create a context variable
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

// create a context provider
export function ThemeContextProvider(props: { children: ReactNode }) {
    const [darkMode, setDarkMode] = useState<boolean>(false)

    const theme = createTheme({
        typography: {
            // Default font throughout the application
            fontFamily: bookinsanity.style.fontFamily,

            // Headings
            h1: {fontFamily: nodesto.style.fontFamily,},
            h2: {fontFamily: nodesto.style.fontFamily,},
            h3: {fontFamily: nodesto.style.fontFamily,},

            // Other typography
            body1: {fontFamily: bookinsanity.style.fontFamily, fontSize: '1.5rem',},
            body2: {fontFamily: bookinsanity.style.fontFamily,},
            button: {fontFamily: scalySans.style.fontFamily, fontSize: '1.5rem',},

            // Custom Typography
            // Add these to types/mui.d.ts
            quoteText: {
                fontFamily: zatanna.style.fontFamily,
                fontSize: '1.5rem',
            },

        },
        palette: {
            mode: darkMode ? "dark" : "light",
            primary: {
                light: '#757ce8',
                main: '#3f50b5',
                dark: '#002884',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            },
        }
    });

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

// create a function to use the context
export function useThemeContext() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeContextProvider')
    }
    return context
}
