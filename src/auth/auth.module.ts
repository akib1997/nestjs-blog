import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { UsersModule } from 'src/modules/users/users.module';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from 'src/modules/users/users.service';

export const jwtSecret = 'zjP9h6ZI5LoSKCRj';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '5m' },
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, JwtStrategy],
  exports: [UsersService],
})
export class AuthModule {}
