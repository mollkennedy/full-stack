import Link from 'next/link'
export default function HomePage() {
  return(
    <main>
      <h1> Welcome to your Campus Bookings System</h1>
      <p>Browse and book rooms on campus</p>
      <Link href="resources">
      View Resources</Link>
    </main>
  )
}