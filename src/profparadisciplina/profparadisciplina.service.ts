import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfparadisciplinaDto } from './dto/create-profparadisciplina.dto';
import { UpdateProfparadisciplinaDto } from './dto/update-profparadisciplina.dto';

@Injectable()
export class ProfparadisciplinaService {
    constructor(
        private readonly prisma: PrismaService
    ){}

    async create(data: CreateProfparadisciplinaDto){
        const profparadisciplina = await this.prisma.profParaDisciplina.create({
            data:data,
        });
        return profparadisciplina;
    }

    async findAll(){
        return await this.prisma.profParaDisciplina.findMany();
    }

    async findProfparadisciplina(id: number){
        return await this.prisma.profParaDisciplina.findUnique({
            where:{
                id:id,
            },
        });
    }

    async deleteProfparadisciplina(id: number){
        return await this.prisma.profParaDisciplina.delete({
            where:{
                id:id,
            },
        });
    }

    async updateProfparadisciplina(id: number, data: UpdateProfparadisciplinaDto){
        return await this.prisma.profParaDisciplina.update({
            where:{
                id:id,
            },
            data: data,
        });
    }


}
