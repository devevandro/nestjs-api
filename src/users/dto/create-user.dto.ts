import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    email: string;
    @ApiPropertyOptional()
    name: string;
    @ApiProperty()
    password: string;
}
