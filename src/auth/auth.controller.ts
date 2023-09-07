import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService) {}

    @Post('/signup')
    signup(@Body() body: SignupDto):string {
        return this.authService.signup()
    }
}
