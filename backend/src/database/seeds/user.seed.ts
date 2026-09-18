import { PrismaClient } from '../../generated/prisma';
import { Users } from './data/users.data';

export async function seedUsers(prisma: PrismaClient) {
  for (const userData of Users) {
    const existing = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (existing) {
      console.log(`User ${userData.email} already exists — skipping`);
      continue;
    }

    const user = await prisma.user.create({
      data: userData,
    });
    console.log(`Seeded user: ${user.name}`);
  }
}
