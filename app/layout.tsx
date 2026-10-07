import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {

title: {

template: '%s · Campus Bookings',

default: 'Campus Bookings',

},

}

export default function RootLayout({ children }: LayoutProps<'/'>) {

return (

<html lang="en">

<body>
    <header className="flex items-center justify-between bg-slate-900 p-4 text-white">
        <h1>Campus Bookings</h1>

<nav aria-label="Main">
<Link href="/">Home   </Link>
<Link href="/resources">Resources</Link>
<Link href="/bookings">Bookings</Link>
</nav>
    </header>

<main>
    {children}
</main> 

<footer>
    <p>Campus Bookings</p>
</footer>
</body>

</html>

)

}