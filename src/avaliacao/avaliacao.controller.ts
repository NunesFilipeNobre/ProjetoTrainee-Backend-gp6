import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UnauthorizedException,
  ValidationPipe,
} from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { CurrentUser } from 'src/auth/decorators/CurrentUser.decorator';
import { UserPayload } from 'src/auth/types/UserPayload';
import { Public } from 'src/auth/decorators/isPublic.decorator';

@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}
  
  @Post()
  async create(@Body(ValidationPipe) avaliacaoData: CreateAvaliacaoDto, @CurrentUser() currentUser: UserPayload) {
    {if(avaliacaoData.userID !== currentUser?.sub)
    {
      throw new UnauthorizedException('Só é possível criar avaliações para si mesmo')
  }}
    return await this.avaliacaoService.create(avaliacaoData);
  }

  @Get()
  async findAll() {
    return await this.avaliacaoService.findAll();
  }
  @Public()
  @Get('professor')
  async findByProfessor(@Query('professorID', ParseIntPipe) professorID: number) {
    return await this.avaliacaoService.findByProfessor(professorID);
  }
  @Public()
  @Get('user/:userid')
  async findUserAvaliacao(@Param('userid', ParseIntPipe) userid: number) {
    return await this.avaliacaoService.findUserAvaliacao(userid);
  }
  @Public()
  @Get(':id')
  async findAvaliacao(@Param('id', ParseIntPipe) id: number) {
    return await this.avaliacaoService.findAvaliacao(id);
  }
  
  @Delete(':id')
  async deleteAvaliacao(@Param('id', ParseIntPipe) id: number) {
    return await this.avaliacaoService.deleteAvaliacao(id);
  }
  
  @Patch(':id')
  async updateAvaliacao(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) data: UpdateAvaliacaoDto,
  ) {
    return await this.avaliacaoService.updateAvaliacao(id, data);
  }
}
