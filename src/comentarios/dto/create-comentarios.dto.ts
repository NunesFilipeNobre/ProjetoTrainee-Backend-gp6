import {
    IsNumber,
    IsNotEmpty,
    IsString,
  } from 'class-validator';

export class CreateComentariosDto{
    @IsNotEmpty()
    @IsNumber()
    userID: number;
    @IsNotEmpty()
    @IsNumber()
    avaliacaoID: number;
    @IsNotEmpty()
    @IsString()
    conteudo: string;
}