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
import { ProfparadisciplinaService } from './profparadisciplina.service';
import { CreateProfparadisciplinaDto } from './dto/create-profparadisciplina.dto';
import { UpdateProfparadisciplinaDto } from './dto/update-profparadisciplina.dto';

@Controller('profparadisciplina')
export class ProfparadisciplinaController {
  constructor(private readonly profparadisciplinaService: ProfparadisciplinaService) {}
  
  @Post()
  async create(@Body(ValidationPipe) profparadisciplinaData: CreateProfparadisciplinaDto){
    return await this.profparadisciplinaService.create(profparadisciplinaData);
  }

  @Get()
  async findAll(){
    return await this.profparadisciplinaService.findAll();
  }

  @Get(':id')
  async findProfparadisciplina(@Param('id', ParseIntPipe) id: number){
    return await this.profparadisciplinaService.findProfparadisciplina(id);
  }

  @Delete(':id')
  async deleteProfparadisciplina(@Param('id', ParseIntPipe) id: number){
    return await this.profparadisciplinaService.deleteProfparadisciplina(id);
  }

  @Patch(':id')
  async updateProfparadisciplina(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) data:UpdateProfparadisciplinaDto){
    return await this.profparadisciplinaService.updateProfparadisciplina(id, data);
  }
}
