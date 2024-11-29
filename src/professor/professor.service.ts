import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';

@Injectable()
export class ProfessorService { 
    constructor(private readonly prisma: PrismaService) {}

    async createProfessor(data: CreateProfessorDto) {
    const professor = await this.prisma.professor.create({
      data: data,
    });
    return professor;
  }

  async findAllProfessor() {
    return await this.prisma.professor.findMany();
  }

  async findOneProfessor(id: number) {
    return await this.prisma.professor.findUnique({
      where: {
        id: id,
      },
    });
  }

  async deleteProfessor(id: number) {
    return await this.prisma.professor.delete({
      where: {
        id: id,
      },
    });
  }

  async updateProfessor(id: number, data: UpdateProfessorDto) {
    return await this.prisma.professor.update({
      where: {
        id: id,
      },
      data: data,
    });
  }
}
