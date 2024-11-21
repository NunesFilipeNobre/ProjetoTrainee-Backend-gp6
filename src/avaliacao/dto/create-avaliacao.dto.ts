import {
    IsNumber,
    IsBase64,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsStrongPassword,
  } from 'class-validator';

export class CreateAvaliacaoDto{
    @IsNotEmpty()
    @IsNumber()
    userID: number;
    @IsNotEmpty()
    @IsString()
    conteudo: string;
}