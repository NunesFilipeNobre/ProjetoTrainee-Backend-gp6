import {
    IsString,
    IsOptional
  } from 'class-validator';
  
  export class UpdateProfessorDto {
    @IsOptional()
    @IsString({ message: 'Nome must be a string' })
    nome: string;
    @IsOptional()
    @IsString({ message: 'Departamento must be a string' })
    departamento: string;
  }