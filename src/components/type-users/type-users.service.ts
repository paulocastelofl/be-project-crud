import { Injectable } from '@nestjs/common';
import { CreateTypeUserDto } from './dto/create-type-user.dto';
import { UpdateTypeUserDto } from './dto/update-type-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { TypeUser } from './entities/type-user.entity';

@Injectable()
export class TypeUsersService {

  constructor(private readonly prisma: PrismaService) { }
  async create(createTypeUserDto: CreateTypeUserDto): Promise<TypeUser> {
    return this.prisma.typeUser.create({
      data: createTypeUserDto,
    });
  }

  async findAll(): Promise<TypeUser[]> {
    return this.prisma.typeUser.findMany();
  }

  async findOne(id: number): Promise<TypeUser | null> {
    return this.prisma.typeUser.findUnique({
      where: { id },
    });;
  }

  async update(id: number, updateUserDto: UpdateTypeUserDto): Promise<TypeUser> {
    return this.prisma.typeUser.update({
      data: updateUserDto,
      where: { id },
    });
  }

  async remove(id: number) {
    return this.prisma.typeUser.delete({ where: { id } });
  }
}
