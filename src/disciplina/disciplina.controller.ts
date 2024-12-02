import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { createDisciplinaDto } from './dto/create-disciplina.dto';
import { Param, ParseIntPipe} from '@nestjs/common';


@Controller('disciplina') //na hora de usar o postman: http://localhost:3333/disciplina
export class DisciplinaController {
  constructor(private readonly disciplinaService: DisciplinaService) {}

  @Post()
  async create(@Body(ValidationPipe) disciplinaData: createDisciplinaDto){
    return await this.disciplinaService.create(disciplinaData);
  }

  @Get() 
    async findAll(){
      return await this.disciplinaService.findAll();
  }

  @Get(':id')
  async findDisciplina(@Param('id', ParseIntPipe) id: number){
    return await this.disciplinaService.findDisciplina(id);
  }
}
