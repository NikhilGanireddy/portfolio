import './globals.css'
import {Outfit} from 'next/font/google'
import {GlobalUserContextProvider} from "@context/context";

const outfit = Outfit({
        subsets: ['latin'],
        weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    }
)

export const metadata = {
    title: 'Nikhil Ganireddy',
    description: "Nikhil " +
        "Ganireddy's Portfolio Website",
}

export default function RootLayout({children}) {

    return (
        <html lang="en">
        <body className={`${outfit.className} duration-200 transition-all dot-section`}>
        <GlobalUserContextProvider>
            {children}
        </GlobalUserContextProvider>
        </body>
        </html>
    )
}
