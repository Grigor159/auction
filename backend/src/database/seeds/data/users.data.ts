import { UserRole } from '../../../users/enums/user-role.enum';
import { AuthProvider } from '../../../users/enums/auth-provider.enum';

export const Users = [
  {
    email: 'grigsgog@gmail.com',
    name: 'Grigor Safaryan',
    status: true, // active
    provider: AuthProvider.GOOGLE,
    sub: '100987032133911333272',
    picture:
      'https://lh3.googleusercontent.com/a/ACg8ocIPdBgLHZgSXX0OlkGG6hFylx6RwEeLosUEOtiCTrdt7EMVKBSI=s96-c',
    role: UserRole.BOTH,
    rating: 5,
    ratingCount: 10,
    sales: 5,
    purchases: 5,
  },
];
