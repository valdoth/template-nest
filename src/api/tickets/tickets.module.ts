import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [TicketsService, PrismaService],
  controllers: [TicketsController],
})
export class TicketsModule {}