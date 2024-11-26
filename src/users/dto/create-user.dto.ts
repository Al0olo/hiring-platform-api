import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsDateString,
  IsArray,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The full name of the user',
    maxLength: 50,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  fullName: string;

  @ApiProperty({
    example: '1990-01-01',
    description: 'The date of birth of the user in ISO format',
  })
  @IsDateString()
  @IsNotEmpty()
  dateOfBirth: string;

  @ApiProperty({
    example: 'Sydney',
    description: 'The preferred location of the user',
    enum: ['Sydney', 'Melbourne', 'Brisbane', 'Adelaide', 'Perth'],
  })
  @IsString()
  @IsNotEmpty()
  preferredLocation: string;

  @ApiProperty({
    example: ['React', 'TypeScript'],
    description: 'List of programming skills',
    type: [String],
  })
  @IsArray()
  @IsNotEmpty()
  programmingSkills: string[];

  @ApiProperty({
    example: 'Experienced developer with 5 years of experience...',
    description: "A brief summary of the user's resume",
    maxLength: 250,
  })
  @IsString()
  @MaxLength(250)
  resumeSummary: string;
}
