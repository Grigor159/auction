import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserStatus } from '../enums/user-status.enum';
import { AuthProvider } from '../enums/auth-provider.enum';
import { UserRole } from '../enums/user-role.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  name: string | null;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.DEACTIVE })
  status: UserStatus;

  // ─── OAuth ───
  @Column({ type: 'enum', enum: AuthProvider, nullable: true })
  provider: AuthProvider | null;

  @Column({ type: 'varchar', unique: true, nullable: true })
  sub: string | null;

  @Column({ type: 'varchar', nullable: true })
  picture: string | null;

  // ─── Role ───
  @Column({ type: 'enum', enum: UserRole, default: UserRole.BUYER })
  role: UserRole;

  // ─── Rating ───
  @Column({ type: 'decimal', precision: 2, scale: 1, default: 0 })
  rating: number;

  @Column({ type: 'int', default: 0 })
  ratingCount: number;

  // ─── History ───
  @Column({ type: 'int', default: 0 })
  sales: number;

  @Column({ type: 'int', default: 0 })
  purchases: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
