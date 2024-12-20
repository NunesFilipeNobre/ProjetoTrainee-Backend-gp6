import {
  Controller,
  Body,
  Post,
  ValidationPipe,
  ParseIntPipe,
  Param,
  Get,
  Delete,
  Patch,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CurrentUser } from 'src/auth/decorators/CurrentUser.decorator';
import { UserPayload } from 'src/auth/types/UserPayload';
import { Public } from 'src/auth/decorators/isPublic.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post()
  async create(@Body(ValidationPipe) userData: CreateUserDto) {
    return await this.userService.create(userData); //cria um usuário novo
  }

  @Get()
  async findAll() {
    return await this.userService.findAll(); //acha todos os usuários
  }
  @Public()
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findOne(id); //acha um usuário específico pelo id-> localhost:3000/user/id_do_usuario
  }
  @Public()
  @Delete(':id')
  async del_user(@Param('id', ParseIntPipe) id: number, @CurrentUser() currentUser: UserPayload) {
    {/*if(id !== currentUser?.sub)
      {
        throw new UnauthorizedException('Só é possivel atualizar as suas próprias informações')
      }*/}
    return await this.userService.del_user(id); //deleta um usuário específico pelo id
  }
  @Public()
  @Patch('update/:id')
  async update_user(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) data: UpdateUserDto,
    @CurrentUser() currentUser: UserPayload
  ) {
    {/*if(id !== currentUser?.sub)
    {
      throw new UnauthorizedException('Só é possivel atualizar as suas próprias informações')
    }*/}
    return await this.userService.update_user(id, data); //atualiza as informações de um usuário específico pelo id
  }
}
