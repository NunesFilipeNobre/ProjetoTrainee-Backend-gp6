import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: data,
    });
    return user;
  }

  async findAll() {
    const usuarios = await this.prisma.user.findMany({});
    console.log(usuarios)
    return usuarios
  }

  async findOne(id: number) {
    const usuario = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return usuario
  }

  async del_user(id: number) {
    return await this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }

  async update_user(id: number, data: UpdateUserDto) {
    return await this.prisma.user.update({
      where: {
        id: id,
      },
      data: data,
    });
  }
}
