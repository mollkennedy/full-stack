import Link from 'next/link'

import type { Resource } from '@/lib/resources'




type Props = { resource: Resource; popular?: boolean }



export default function ResourceCard({ resource, popular }: Props) {

return (

<article className="rounded-lg border p-4 shadow-sm">

<h2 className="text-xl font-semibold">{resource.name}</h2>

<p className="text-sm text-gray-500">{resource.capacity} seats</p>

{popular && <p>Popular this week</p>}

<Link className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md" href={`/resources/${resource.id}`}>View</Link>

</article>

)

}