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

@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @Post()
  async createProfessor(@Body(ValidationPipe) professorData: CreateProfessorDto){
    return await this.professorService.createProfessor(professorData);
  }

  @Get()
  async findAllProfessor(){
    return await this.professorService.findAllProfessor();
  }

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

