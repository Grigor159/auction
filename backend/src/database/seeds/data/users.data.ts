import { Prisma, UserStatus, UserRole, AuthProvider } from '../../../generated/prisma';

export const Users: Prisma.UserCreateInput[] = [
  {
    email: 'grigsgog@gmail.com',
    name: 'Grigor Safaryan',
    status: UserStatus.DEACTIVE,
    role: UserRole.BOTH,
    provider: AuthProvider.GOOGLE,
    sub: '100987032133911333272',
    picture:
      'https://lh3.googleusercontent.com/a/ACg8ocIPdBgLHZgSXX0OlkGG6hFylx6RwEeLosUEOtiCTrdt7EMVKBSI=s96-c',
    rating: 5,
    ratingCount: 10,
    sales: 5,
    purchases: 5,
  },
];
