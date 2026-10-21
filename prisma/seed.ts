import 'dotenv/config';
import { Main } from 'next/document';
import { PrismaClient} from '../app/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = process.env.DATABASE_URL;

if (!connectionString) 
{
    throw new Error('DATABASE_URL is missing');
}

const adapter = new PrismaPg({ connectionString });

const prisma = new PrismaClient({ adapter });

async function main() {
    await prisma.booking.deleteMany();
    await prisma.user.deleteMany();
    await prisma.resource.deleteMany();

    await prisma.resource.createMany({
        data: [
            {
            slug: 'study-room-1',
            name: 'Study Room 1',
            type: 'room',
            capacity: 6,
            },

        {
            slug: 'computer-lab-1',
            name: 'Computer Lab 1',
            type: 'room',
            capacity: 24,
        },

        {
            slug: 'laptop-1',
            name: 'Student Laptop 1',
            type: 'equipment',
            capacity: 1,
        },

        {
            slug: 'sports-hall-1',
            name: 'Sports Hall 1',
            type: 'sport',
            capacity: 30,
        },
    ]
      })

      const studyRoom = await prisma.resource.findUniqueOrThrow({
        where:
        {
            slug: 'study-room-1'
        }

      });

    await prisma.user.create({
        data:
        {
            name: 'mollie',
            email: 'mollie@mollie.com',
            bookings: {
                create: {
                       resourceId: studyRoom.id,
                       startsAt: new Date('2026-10-22T10:00:00Z'),
                       endsAt: new Date('2026-10-22T10:00:00Z'),
                }
            }
        }
    })

    await prisma.user.create({
        data:
        {
            name: 'brad',
            email: 'brad@brad.com',
        }
    })

}

main().finally(() => prisma.$disconnect())