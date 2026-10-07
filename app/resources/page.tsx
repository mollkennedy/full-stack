import { resources } from '@/lib/resources'
export default function ResourcesPage() {
    return(
        <main>
            <h1>Resources</h1>

            <ul>
                {resources.map((resource) => (
                    <li key={resource.id}>
                        {resource.name}
                    </li>
                ))}
            </ul>
        </main>
    )
    }
