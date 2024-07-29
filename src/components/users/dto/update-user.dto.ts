import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({
        maxLength: 80,
        description: '',
        example: 'João Silva',
        type: String,
        minimum: 1,
        maximum: 80,
    })
    @IsString()
    name: string;

    @ApiProperty({
        maxLength: 80,
        description: '',
        example: '(92) 98126-1466',
        type: String,
        minimum: 1,
        maximum: 80,
    })
    @IsString()
    phone: string;

    @ApiProperty({
        description: 'Type ID',
        example: 1,
        type: Number,
        minimum: 1,
    })
    @IsNumber()
    @Type(() => Number)
    typeUserId: number;
}
