import { Controller, Request, UseGuards, Post, Get } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { CredentialsDto } from './dto/credentials.dto';

@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({ type: CredentialsDto })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any): Promise<any> {
    return await this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('whoami')
  async whoami(@Request() req: any): Promise<any> {
    return req.user;
  }
}
