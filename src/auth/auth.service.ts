import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginRequestBody } from './dto/loginRequestBody.dto';
import { UserToken } from './types/UserToken'
import * as bcrypt from 'bcrypt'
import { UserPayload } from './types/UserPayload';

// @Injectable()
// export class AuthService {
// constructor(private readonly userService: UserService,
//     private readonly jwtService: JwtService,
//     private readonly configService: ConfigService){}
//     async login(loginRequestBody: LoginRequestBody): Promise<UserToken> {

//         const isUserValid = await this.validateUser(loginRequestBody.email, loginRequestBody.senha);

//         if (!isUserValid) {
//             throw new UnauthorizedException('Usuário ou senha incorretos');
//         }
        
//         const payload: UserPayload = {
//             sub: isUserValid.id,
//             email: loginRequestBody.email,
//         };

//         const jwtSecret = this.configService.get<string>('JWT_SECRET');

//         const jwtToken = await this.jwtService.signAsync(payload, {expiresIn: '1d', secret: jwtSecret});

//         return {
//             access_token: jwtToken,
//         };
//     }

//     async validateUser(email: string, senha: string) {
//         const user = await this.userService.findByEmail(email);

//         if (user) {
//             const isPasswordValid = await bcrypt.compare(senha, user.senha);

//             if (isPasswordValid) {
//                 return {
//                     ...user,
//                     senha: undefined,
//                 };
//             } 
//         } 

//         return null;
//     }

// }

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(loginRequestBody: LoginRequestBody): Promise<{ access_token: string }> {
    const user = await this.validateUser(loginRequestBody.email, loginRequestBody.senha);
  
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
  
    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);
  
    return { access_token: token }; 
  }

  async validateUser(email: string, senha: string) {
    const user = await this.userService.findByEmail(email);

    if (user && (await bcrypt.compare(senha, user.senha))) {
      return { ...user, senha: undefined };
    }

    return null;
  }
}

