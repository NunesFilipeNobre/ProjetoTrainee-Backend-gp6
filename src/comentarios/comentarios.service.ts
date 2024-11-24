import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateComentariosDto } from './dto/create-comentarios.dto';
import { UpdateComentariosDto } from './dto/update-comentarios.dto';

@Injectable()
export class ComentariosService {
    constructor(
        private readonly prisma: PrismaService
    ){}

    async create(data: CreateComentariosDto){
        const comentarios = await this.prisma.comentarios.create({
            data:data,
        });
        return comentarios;
    }

    async findAll(){
        return await this.prisma.comentarios.findMany();
    }

    async findComentarios(id: number){
        return await this.prisma.comentarios.findUnique({
            where:{
                id:id,
            },
        });
    }

    async deleteComentarios(id: number){
        return await this.prisma.comentarios.delete({
            where:{
                id:id,
            },
        });
    }

    async updateComentarios(id: number, data: UpdateComentariosDto){
        return await this.prisma.comentarios.update({
            where:{
                id:id,
            },
            data: data,
        });
    }
}
