import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(private readonly prisma: PrismaService) { }
  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.prisma.user.create({
        data: {
          name: createUserDto.name,
          phone: createUserDto.phone,
          typeUserId: createUserDto.typeUserId,
        },
      });
    } catch (error) {
      throw new BadRequestException("Error creating user: " + error.message);
    }
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        fkType: {
          select: {
            id: true,
            description: true,
          }
        }
      }
    });
  }

  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({
      data: updateUserDto,
      where: { id },
    });
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
