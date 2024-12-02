import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createDisciplinaDto } from './dto/create-disciplina.dto';

@Injectable()
export class DisciplinaService {
    constructor(private readonly prisma: PrismaService){}

    async create(data: createDisciplinaDto) {
        const disciplina = await this.prisma.disciplina.create({
            data: data,
        });
        return disciplina;
    }

    async findAll(){
        return this.prisma.disciplina.findMany();
    }

    async findDisciplina(id: number){
        return await this.prisma.disciplina.findUnique({where: {id: id}})
    }
}
