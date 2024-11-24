import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { ComentariosModule } from './comentarios/comentarios.module';

@Module({
  imports: [UserModule, PrismaModule, AvaliacaoModule, ComentariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
