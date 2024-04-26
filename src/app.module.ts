import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { CronService } from './post/cron.service';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';


@Module({
  imports: [PostModule, UsersModule],
  controllers: [],
  providers: [CronService, PrismaService],
})
export class AppModule {}
