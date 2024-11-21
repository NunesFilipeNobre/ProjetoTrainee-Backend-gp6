import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';

@Injectable()
export class AvaliacaoService {
    constructor(
        private readonly prisma: PrismaService
    ){}

    async create(data: CreateAvaliacaoDto){
        const avaliacao = this.prisma.avaliacoes.create({
            data:data,
        });
        return avaliacao;
    }
}
