"use client";

import React from 'react'
import { ThemeProvider } from "next-themes";

export default function Theme({children}) {
    return (
    <ThemeProvider
        attribute="data-theme" // DaisyUI uses data-theme
        defaultTheme="light"   // can be "dark" or "cupcake" too
        >
        {children}
    </ThemeProvider>
    )
}
