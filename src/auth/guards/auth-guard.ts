
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from '../decorators/isPublic.decorator';
  
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
  
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
  
    if (!token) {
      console.error('Token não encontrado no cabeçalho Authorization'); 
      throw new UnauthorizedException();
    }
  
    try {
      console.log('Authorization Header:', request.headers.authorization); 
      console.log('Token recebido:', token); // logs para ver o andamento.
  
      const jwtSecret = this.configService.get('JWT_SECRET'); // segredo = segredao
      console.log('JWT_SECRET no auth-guard:', jwtSecret); // log do segredo JWT
  
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtSecret,
      });
      console.log('Payload decodificado:', payload); 
      request['user'] = payload;
      console.log('Usuário no request:', request['user']); 
    } catch (error) {
      console.error('Erro ao verificar token:', error.message);
      throw new UnauthorizedException();
    }
  
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    console.log('Authorization Header:', request.headers.authorization); // Adicionado
    return type === 'Bearer' ? token : undefined;
  }
}
