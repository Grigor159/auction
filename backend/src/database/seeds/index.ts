import { PrismaClient } from '../../generated/prisma'; // adjust path to your generated client
import { seedUsers } from './user.seed';

const prisma = new PrismaClient();

const seedMap: Record<string, (prisma: PrismaClient) => Promise<void>> = {
  users: seedUsers,
};

async function run() {
  const tableName = process.argv[2];

  if (!tableName) {
    console.error('Please specify a table name, e.g. npm run seed users');
    process.exit(1);
  }

  const seedFn = seedMap[tableName];

  if (!seedFn) {
    console.error(
      `No seeder found for "${tableName}". Available: ${Object.keys(seedMap).join(', ')}`,
    );
    process.exit(1);
  }

  await seedFn(prisma);

  console.log('Seeding complete');
}

run()
  .catch((err) => {
    console.error('Seeding failed:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
