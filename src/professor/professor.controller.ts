import { 
  Body,
  Controller,
  Delete, 
  Get, 
  Param, 
  ParseIntPipe, 
  Patch, 
  Post, 
  ValidationPipe,
 } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { Public } from 'src/auth/decorators/isPublic.decorator';

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Post()
  async createProfessor(@Body(ValidationPipe) professorData: CreateProfessorDto){
    return await this.professorService.createProfessor(professorData);
  }
  @Public()
  @Get()
  async findAllProfessor(){
    return await this.professorService.findAllProfessor();
  }
  @Public()
  @Get(':id')
  async findOneProfessor(@Param('id', ParseIntPipe) id: number){
    return await this.professorService.findOneProfessor(id);
  }

  @Delete(':id')
  async deleteProfessor(@Param('id', ParseIntPipe) id: number){
    return await this.professorService.deleteProfessor(id);
  }

  @Patch(':id')
  async updateProfessor(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) data:UpdateProfessorDto){
    return await this.professorService.updateProfessor(id, data);
  }
}

