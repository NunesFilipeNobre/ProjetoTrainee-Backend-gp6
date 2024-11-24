import {
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';

export class UpdateComentariosDto{
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    conteudo: string;
}