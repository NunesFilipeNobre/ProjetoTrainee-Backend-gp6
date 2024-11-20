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
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body(ValidationPipe) userData: CreateUserDto) {
    return await this.userService.create(userData); //cria um usuário novo
  }

  @Get()
  async findAll() {
    return await this.userService.findAll(); //acha todos os usuários
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findOne(id); //acha um usuário específico pelo id-> localhost:3000/user/id_do_usuario
  }

  @Delete(':id')
  async del_user(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.del_user(id); //deleta um usuário específico pelo id
  }

  @Patch(':id')
  async update_user(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) data: UpdateUserDto,
  ) {
    return await this.userService.update_user(id, data); //atualiza as informações de um usuário específico pelo id
  }
}
