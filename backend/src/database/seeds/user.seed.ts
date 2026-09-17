import { DataSource } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Users } from './data/users.data';

export async function seedUsers(connection: DataSource) {
  const userRepository = connection.getRepository(User);


  for (const userData of Users) {
    const existing = await userRepository.findOne({
      where: { email: userData.email },
    });

    if (existing) {
      console.log(`User ${userData.email} already exists — skipping`);
      continue;
    }

    const user = userRepository.create(userData);
    await userRepository.save(user);
    console.log(`Seeded user: ${userData.name}`);
  }
}
