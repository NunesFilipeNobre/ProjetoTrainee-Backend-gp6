import {
    IsNotEmpty,
    IsNumber,
    IsOptional
  } from 'class-validator';
  
  export class UpdateProfparadisciplinaDto {
    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    disciplinaID: number;
    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    professorID: number;

  }