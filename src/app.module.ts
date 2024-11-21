import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';

@Module({
  imports: [UserModule, PrismaModule, AvaliacaoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
