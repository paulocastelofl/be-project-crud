import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTypeUserDto {
    @ApiProperty({
        maxLength: 80,
        description: '',
        example: 'Pessoa Fisica',
        type: String,
        minimum: 1,
        maximum: 80,
    })
    @IsString()
    description: string;
}
