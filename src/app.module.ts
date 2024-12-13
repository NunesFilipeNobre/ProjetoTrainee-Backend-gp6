import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { ProfessorModule } from './professor/professor.module';
import { ProfparadisciplinaModule } from './profparadisciplina/profparadisciplina.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, PrismaModule, AvaliacaoModule, ComentariosModule, ProfessorModule, ProfparadisciplinaModule, DisciplinaModule, JwtModule, ConfigModule.forRoot({
    isGlobal: true,
  }), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
