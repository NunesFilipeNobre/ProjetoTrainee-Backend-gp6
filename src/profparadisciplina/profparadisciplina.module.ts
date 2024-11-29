import { Module } from '@nestjs/common';
import { ProfparadisciplinaService } from './profparadisciplina.service';
import { ProfparadisciplinaController } from './profparadisciplina.controller';

@Module({
  controllers: [ProfparadisciplinaController],
  providers: [ProfparadisciplinaService],
})
export class ProfparadisciplinaModule {}
