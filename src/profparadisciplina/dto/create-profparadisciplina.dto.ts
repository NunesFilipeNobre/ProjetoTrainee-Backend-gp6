import {
    IsNotEmpty,
    IsNumber
  } from 'class-validator';
  
  export class CreateProfparadisciplinaDto{
    @IsNumber() 
    @IsNotEmpty()
    disciplinaID: number;
    @IsNotEmpty()
    @IsNumber()
    professorID: number;
  }