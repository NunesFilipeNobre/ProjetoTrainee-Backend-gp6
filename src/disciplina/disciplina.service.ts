import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createDisciplinaDto } from './dto/create-disciplina.dto';
import { updateDisciplinaDto } from './dto/update-disciplina.dto';

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

    async deleteDisciplina(id: number){
        return await this.prisma.disciplina.delete({where: {id: id}});
    }

    async updateDisciplina(id: number, data: updateDisciplinaDto) { 
        return await this.prisma.disciplina.update({
            where: {
                id: id,
            },
            data: data,
            
        });
    }
}
