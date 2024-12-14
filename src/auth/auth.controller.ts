import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestBody } from './dto/loginRequestBody.dto';
import { get } from 'http';
import { Public } from '../auth/decorators/isPublic.decorator';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() LoginRequestBody : LoginRequestBody){
    return this.authService.login(LoginRequestBody)
  }

  @Get('me')
  getProfile(@Request() req){
    return req.user;
  }
}
