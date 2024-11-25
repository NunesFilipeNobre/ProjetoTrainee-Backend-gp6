import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { ProfessorModule } from './professor/professor.module';

@Module({
  imports: [UserModule, PrismaModule, AvaliacaoModule, ComentariosModule, ProfessorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
