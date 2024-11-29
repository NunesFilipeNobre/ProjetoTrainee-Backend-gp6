import {
    IsNotEmpty,
    IsNumber,
  } from 'class-validator';
  
  export class CreateProfparadisciplinaDto {
    @IsNotEmpty()
    @IsNumber()
    disciplinaID: number;
    @IsNotEmpty()
    @IsNumber()
    professorID: number;

  }