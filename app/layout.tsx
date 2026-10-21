import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'
import NavLinks from './_components/nav-links';

export const metadata: Metadata = {

title: {

template: '%s · Campus Bookings',

default: 'Campus Bookings',

},

}

export default function RootLayout({ children }: LayoutProps<'/'>) {

return (

<html lang="en">

<body className="flex min-h-screen flex-col">
    <header className="flex items-center justify-between bg-slate-900 p-4 text-white">
        <h1>Campus Bookings</h1>

<NavLinks />
    </header>

<main className="mx-auto w-full max-w-5xl flex-1 p-6">
    {children}
</main> 

<footer className="border-t bg-gray-50 py-6 text-center text-sm text-gray-600">
    <p>Campus Bookings</p>
</footer>
</body>

</html>

)

}