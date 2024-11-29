import {
    IsNotEmpty,
    IsNumber,
    IsOptional
  } from 'class-validator';
  
  export class UpdateProfparadisciplinaDto {
    @IsNumber()
    @IsOptional()
    disciplinaID: number;
    @IsNotEmpty()
    @IsNumber()
    professorID: number;

  }