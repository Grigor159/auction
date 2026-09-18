import {
  IsEmail,
  IsString,
  IsOptional,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';
import { UserRole } from '../enums/user-role.enum';
import { AuthProvider } from '../enums/auth-provider.enum';

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

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}