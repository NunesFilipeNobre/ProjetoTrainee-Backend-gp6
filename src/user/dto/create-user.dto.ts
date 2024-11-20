import {
  IsBase64,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Nome is required' })
  @IsString({ message: 'Nome must be a string' })
  nome: string;
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;
  @IsNotEmpty({ message: 'Senha is required' })
  @IsStrongPassword()
  senha: string;
  @IsNotEmpty({ message: 'Departamento is required' })
  @IsString({ message: 'Departamento must be a string' })
  departamento: string;
  @IsNotEmpty({ message: 'Curso is required' })
  @IsString({ message: 'Curso must be a string' })
  curso: string;
  @IsOptional({ message: 'Fotoperfil is optional' })
  @IsBase64()
  foto_perfil: Buffer;
}
