import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { CronService } from './post/cron.service';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [PostModule, UsersModule, AccountsModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [CronService, PrismaService],
})
export class AppModule {}
