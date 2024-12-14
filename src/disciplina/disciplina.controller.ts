import { Body, Controller, Get, Post, Delete, Patch, ValidationPipe } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { createDisciplinaDto } from './dto/create-disciplina.dto';
import { Param, ParseIntPipe} from '@nestjs/common';
import { updateDisciplinaDto } from './dto/update-disciplina.dto';
import { Public } from 'src/auth/decorators/isPublic.decorator';


@Controller('disciplina') //na hora de usar o postman: http://localhost:3333/disciplina
export class DisciplinaController {
  constructor(private readonly disciplinaService: DisciplinaService) {}

  @Post()
  async create(@Body(ValidationPipe) disciplinaData: createDisciplinaDto){
    return await this.disciplinaService.create(disciplinaData);
  }
  @Public()
  @Get() 
    async findAll(){
      return await this.disciplinaService.findAll();
  }

  @Get(':id')
  async findDisciplina(@Param('id', ParseIntPipe) id: number){
    return await this.disciplinaService.findDisciplina(id);
  }

  @Delete(':id')
  async deleteDisciplina(@Param('id', ParseIntPipe) id: number){
    return await this.disciplinaService.deleteDisciplina(id);
  }

  @Patch(':id')
  async updateDisciplina(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) data: updateDisciplinaDto){
    return await this.disciplinaService.updateDisciplina(id,data);
}
}
