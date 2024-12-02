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
    @IsString()
    conteudo: string;
}