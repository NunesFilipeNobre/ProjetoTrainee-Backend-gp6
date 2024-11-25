import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class CreateProfessorDto {
    @IsNotEmpty({ message: 'Nome is required' })
    @IsString({ message: 'Nome must be a string' })
    nome: string;
    @IsNotEmpty({ message: 'Departamento is required' })
    @IsString({ message: 'Departamento must be a string' })
    departamento: string;

  }