import { resources } from '@/lib/resources'
import ResourceCard from './resource-card'

export default function ResourcesPage() {
    return(
        <main>
            <h1>Resources</h1>

            <div className="grid gap-4 md:grid-cols-2">
                {resources.map((resource) => (
                    <ResourceCard 
                    key={resource.id}
                   resource={resource}
                    />
                ))}
           </div>
        </main>
    )
    }
