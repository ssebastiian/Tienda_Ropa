'use client'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "@/themes";

export default function Template({ children }: { children: React.ReactNode }) {
    return(  
        <ThemeProvider theme={ lightTheme }>
                <CssBaseline />
                    <section>{ children }</section>
        </ThemeProvider>
    )
}