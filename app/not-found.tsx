import Link from 'next/link' 
export default function notFound() 
{
    return(
        <main>
            <h1> Page Not Found</h1>
            <p>Sorry, we couldn't find that page.</p>
            <Link href="/resources">Back to resources</Link>
        </main>
    )
}