import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { CronService } from 'src/post/cron.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PostController],
  providers: [PostService, CronService, PrismaService],
  imports: [
    ScheduleModule.forRoot()
  ]
})
export class PostModule {}
