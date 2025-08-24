"use client";

import React, { useEffect, useState } from 'react'
import { ThemeProvider } from "next-themes";

export default function Theme({children}) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
    <ThemeProvider
        attribute="data-theme" // DaisyUI uses data-theme
        defaultTheme="light"   // can be "dark" or "cupcake" too
        >
        {children}
    </ThemeProvider>
    )
}