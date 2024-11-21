import {
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';

export class UpdateAvaliacaoDto{
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    conteudo: string;
}