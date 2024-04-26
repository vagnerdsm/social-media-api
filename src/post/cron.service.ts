import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CronService {
  constructor(private prisma: PrismaService) {}

  // @Cron(CronExpression.EVERY_SECOND)
  async getPost(){
    // const posts = await this.prisma.post.findMany();
    // console.log(posts);
  }
}
