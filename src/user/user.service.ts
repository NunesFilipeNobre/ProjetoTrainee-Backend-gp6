import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where:{email: data.email}});

      if (existingUser){
        throw new ConflictException('User with this email already exists');
      }

      const hashedPassword = await bcrypt.hash(data.senha,10);

    return await this.prisma.user.create({
      data: {...data, senha: hashedPassword}
    });
  }

  async findAll() {
    return await this.prisma.user.findMany({
      select:{
        id:true,
        nome:true,
        email:true,
        departamento:true,
        curso:true,
        Avaliacoes:true,
        Comentarios:true,
        createdAt:true,
        updatedAt:true
      },
    });
  }

  async findOne(id: number) {
    const isValidId = await this.prisma.user.findUnique({where:{id}})
    if(!isValidId){
      throw new NotFoundException('User not Found');
    }
    return await this.prisma.user.findUnique({where:{id},
      select:{
        id:true,
        nome:true,
        email:true,
        departamento:true,
        curso:true,
        Avaliacoes:true,
        Comentarios:true,
        createdAt:true,
        updatedAt:true
      },
    });
  }

  async del_user(id: number) {
    const isValidId = await this.prisma.user.findUnique({where: {id}});
    if(!isValidId){
      throw new NotFoundException('User not found');
    }


    return await this.prisma.user.delete({where: { id },
      select:{
        id:true,
        nome:true,
        email:true,
        departamento:true,
        curso:true,
        Avaliacoes:true,
        Comentarios:true,
        createdAt:true,
        updatedAt:true
      },
    });
  }

  async findByEmail(email:string){
    const user = await this.prisma.user.findUnique({where: {email}});
    if(!user){
      return null;
    }

    return user;
  }

  async update_user(id: number, data: UpdateUserDto) {
    const isValidId = await this.prisma.user.findUnique({where: {id}});
    if(!isValidId){
      throw new NotFoundException('User not found');
    }

    const hashedPassword = await bcrypt.hash(data.senha,10);
    return await this.prisma.user.update({
      where: {id},
      data: {...data,
      senha: hashedPassword
    },
    select:{
      id:true,
      nome:true,
      email:true,
      departamento:true,
      curso:true,
      Avaliacoes:true,
      Comentarios:true,
      createdAt:true,
      updatedAt:true
    },
    });
  }
}
