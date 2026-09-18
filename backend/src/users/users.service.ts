import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, AuthProvider } from '../generated/prisma';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existing = await this.prisma.user.findFirst({
      where: {
        provider: createUserDto.provider,
        sub: createUserDto.sub,
      },
    });

    if (existing) {
      throw new ConflictException(
        'User already exists for this provider account',
      );
    }

    return this.prisma.user.create({ data: createUserDto });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async findByProvider(
    provider: AuthProvider,
    sub: string,
  ): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: { provider, sub },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    await this.findOne(id); // throws NotFoundException if missing

    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id); // throws NotFoundException if missing

    await this.prisma.user.delete({ where: { id } });
  }
}