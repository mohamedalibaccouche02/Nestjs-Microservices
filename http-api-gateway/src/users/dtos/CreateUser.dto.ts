import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(15)
    username: string;
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsString()
    @IsOptional()
    @MaxLength(15)
    displayName?: string;
}
