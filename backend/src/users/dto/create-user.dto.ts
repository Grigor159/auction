import {
  IsEmail,
  IsString,
  IsOptional,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';
import { UserRole, AuthProvider, UserStatus } from '../../generated/prisma';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(AuthProvider)
  provider?: AuthProvider;

  @IsOptional()
  @IsString()
  sub?: string;

  @IsOptional()
  @IsString()
  picture?: string;

  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole;

  @IsOptional()
  @IsEnum(UserStatus)
  status?: UserStatus;
}