import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { CronService } from './post/cron.service';
import { PrismaService } from './prisma.service';


@Module({
  imports: [PostModule],
  controllers: [],
  providers: [CronService, PrismaService],
})
export class AppModule {}
