import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';

@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  async create(@Body(ValidationPipe) avaliacaoData:CreateAvaliacaoDto){
    return await this.avaliacaoService.create(avaliacaoData);
  }
}
