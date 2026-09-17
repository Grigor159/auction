import dataSource from '../../data-source';
import { seedUsers } from './user.seed';

const seedMap: Record<string, (connection: any) => Promise<void>> = {
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
    console.error(`No seeder found for "${tableName}". Available: ${Object.keys(seedMap).join(', ')}`);
    process.exit(1);
  }

  const connection = await dataSource.initialize();
  await seedFn(connection);
  await connection.destroy();

  console.log('Seeding complete');
}

run().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});