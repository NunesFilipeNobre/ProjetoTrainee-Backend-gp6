import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule, 
    PassportModule,
    JwtModule.register({
      secret: 'seu-segredo', 
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController], 
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
