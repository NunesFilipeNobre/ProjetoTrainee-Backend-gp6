import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';

@Injectable()
export class AvaliacaoService {
    constructor(
        private readonly prisma: PrismaService
    ){}

    async create(data: CreateAvaliacaoDto){
        const avaliacao = await this.prisma.avaliacoes.create({
            data:data,
        });
        return avaliacao;
    }

    async findAll(){
        return await this.prisma.avaliacoes.findMany();
    }

    async findAvaliacao(id: number){
        return await this.prisma.avaliacoes.findUnique({
            where:{
                id:id,
            },
        });
    }

    async deleteAvaliacao(id: number){
        return await this.prisma.avaliacoes.delete({
            where:{
                id:id,
            },
        });
    }

    async updateAvaliacao(id: number, data: UpdateAvaliacaoDto){
        return await this.prisma.avaliacoes.update({
            where:{
                id:id,
            },
            data: data,
        });
    }
}
