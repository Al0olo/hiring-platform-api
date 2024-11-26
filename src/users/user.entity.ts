import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @ApiProperty({
    example: 1,
    description: 'Unique identifier',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'John Doe',
    description: 'The full name of the user',
  })
  @Column({ length: 50 })
  fullName: string;

  @ApiProperty({
    example: '1990-01-01',
    description: 'Date of birth',
  })
  @Column({ type: 'date' })
  dateOfBirth: Date;

  @ApiProperty({
    example: 'Sydney',
    description: 'Preferred location',
  })
  @Column()
  preferredLocation: string;

  @ApiProperty({
    example: ['React', 'TypeScript'],
    description: 'Programming skills',
  })
  @Column('simple-array')
  programmingSkills: string[];

  @ApiProperty({
    example: 'Experienced developer...',
    description: 'Resume summary',
  })
  @Column({ type: 'text' })
  resumeSummary: string;

  @ApiProperty({
    example: '2024-01-01T00:00:00Z',
    description: 'Creation timestamp',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    example: '2024-01-01T00:00:00Z',
    description: 'Last update timestamp',
  })
  @UpdateDateColumn()
  updatedAt: Date;
}
