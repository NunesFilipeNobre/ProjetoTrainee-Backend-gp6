import {
  IsBase64,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'Nome must be a string' })
  nome: string;
  @IsOptional()
  @IsEmail()
  email: string;
  @IsOptional()
  @IsStrongPassword()
  senha: string;
  @IsOptional()
  @IsString()
  departamento: string;
  @IsOptional()
  @IsString()
  curso: string;
  @IsOptional()
  @IsBase64()
  foto_perfil: Buffer;
}
