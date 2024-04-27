import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { CronService } from './post/cron.service';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';


@Module({
  imports: [PostModule, UsersModule, AccountsModule],
  controllers: [],
  providers: [CronService, PrismaService],
})
export class AppModule {}
