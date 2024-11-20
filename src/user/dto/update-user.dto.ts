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
  @IsNotEmpty({ message: 'Nome is required' })
  @IsString({ message: 'Nome must be a string' })
  nome: string;
  @IsOptional()
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;
  @IsOptional()
  @IsNotEmpty({ message: 'Senha is required' })
  @IsStrongPassword()
  senha: string;
  @IsOptional()
  @IsNotEmpty({ message: 'Departamento is required' })
  @IsString({ message: 'Departamento must be a string' })
  departamento: string;
  @IsOptional()
  @IsNotEmpty({ message: 'Curso is required' })
  @IsString({ message: 'Curso must be a string' })
  curso: string;
  @IsOptional()
  @IsOptional({ message: 'Fotoperfil is optional' })
  @IsBase64()
  foto_perfil: Buffer;
}
