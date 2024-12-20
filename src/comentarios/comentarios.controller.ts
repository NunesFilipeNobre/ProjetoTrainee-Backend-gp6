import { 
  Body,
  Controller,
  Delete, 
  Get, 
  Param, 
  ParseIntPipe, 
  Patch, 
  Post, 
  UnauthorizedException, 
  ValidationPipe,
} from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { CreateComentariosDto } from './dto/create-comentarios.dto';
import { UpdateComentariosDto } from './dto/update-comentarios.dto';
import { CurrentUser } from 'src/auth/decorators/CurrentUser.decorator';
import { UserPayload } from 'src/auth/types/UserPayload';
import { Public } from 'src/auth/decorators/isPublic.decorator';

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}
  
  @Post()
  async create(@Body(ValidationPipe) comentariosData: CreateComentariosDto, @CurrentUser() currentUser: UserPayload) {
      {if(comentariosData.userID !== currentUser.sub)
      {
        throw new UnauthorizedException('Só é possivel criar comentarios para si mesmo')
      }}
    return await this.comentariosService.create(comentariosData);
  }

  @Get()
  async findAll(){
    return await this.comentariosService.findAll();
  }

  @Get(':id')
  async findComentarios(@Param('id', ParseIntPipe) id: number){
    return await this.comentariosService.findComentarios(id);
  }
  @Public()
  @Get('avaliacao/:avaliacaoID') 
  async getComentariosPorAvaliacao(
    @Param('avaliacaoID', ParseIntPipe) avaliacaoID: number
  ) {
    return await this.comentariosService.getComentariosPorAvaliacao(avaliacaoID);
  }
  @Public()
  @Delete(':id')
  async deleteComentarios(@Param('id', ParseIntPipe) id: number){
    return await this.comentariosService.deleteComentarios(id);
  }

  @Patch(':id')
  async updateComentarios(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) data:UpdateComentariosDto){
    return await this.comentariosService.updateComentarios(id, data);
  }
}
