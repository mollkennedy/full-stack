import { PrismaClient} from '../app/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = process.env.DATABASE_URL;

if (!connectionString) 
{
    throw new Error('DATABASE_URL is missing');
}

const adapter = new PrismaPg({ connectionString });

if (!connectionString) {
    throw new Error('DATABASE_URL is missing');
}

const prisma = new PrismaClient({ adapter });

async function main() {
    await prisma.resource.create({
        data: {
            slug: 'study-room-1',
            name: 'Study Room 1',
            type: 'room',
            capacity: 6,
        }
    })

    await prisma.resource.create({
        data: {
            slug: 'computer-lab-1',
            name: 'Computer Lab 1',
            type: 'room',
            capacity: 24,
        }
    })

    await prisma.resource.create({
        data: {
            slug: 'laptop-1',
            name: 'Student Laptop 1',
            type: 'equipment',
            capacity: 1,
        }
    })

    await prisma.resource.create({
        data:
        {
            slug: 'sports-hall-1',
            name: 'Sports Hall 1',
            type: 'sport',
            capacity: 30,
        }
    })

}