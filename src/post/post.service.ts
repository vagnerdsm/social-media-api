import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma.service';
import { Post, Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  async create(post: CreatePostDto) {
    return await this.prisma.post.create({
      data: {
        title: post.title
      },
    })
  }

  async findAll() {
    return await this.prisma.post.findMany()
  }

  async findOne(id: string): Promise<Post | null> {
    const post = await this.prisma.post.findUnique({
      where: {
        id: Number(id)
      }
    })
    return post
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: {
        id: Number(id)
      },
      data: updatePostDto
    })
  }

  async remove(id: number) {
    const deletePost = await this.prisma.post.delete({
      where: {
        id: Number(id)
      }
    })
    if(deletePost) {
      return `Post ${deletePost} deleted`
    }
  }
}
