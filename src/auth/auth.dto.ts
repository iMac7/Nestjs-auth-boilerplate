import {IsEmail ,IsString, IsNotEmpty, MinLength} from "class-validator"

export class SignupDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(5)
    password: string;
}
