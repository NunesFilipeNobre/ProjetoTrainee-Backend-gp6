import {
    IsNumber,
    IsNotEmpty,
    IsString,
  } from 'class-validator';

export class CreateAvaliacaoDto{
    @IsNotEmpty()
    @IsNumber()
    userID: number;
    @IsNotEmpty()
    @IsNumber()
    professorID: number;
    @IsNotEmpty()
    @IsNumber()
    disciplinaID: number;
    @IsNotEmpty()
    @IsString()
    conteudo: string;
}