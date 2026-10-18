'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
    
    const pathname = usePathname();
    const isHomeActive = pathname === "/";
    const isResourcesActive = pathname === "/resources";
    const isBookingsActive = pathname === "/bookings";

    return (
        <nav className="flex gap-6">
<Link href="/"
className={isHomeActive ? "font-bold" : "font-normal"}
>Home</Link>

<Link href="/resources"
className={isResourcesActive ? "font-bold" : "font-normal"}
>Resources</Link>

<Link href="/bookings"
className={isBookingsActive ? "font-bold" : "font-normal"}
>Bookings</Link>

        </nav>
    )
}