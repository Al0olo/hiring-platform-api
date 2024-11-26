import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';
import { User } from './users/user.entity';
import { validate } from '../config/env.validation';
import { UsersModule } from './users/user.module';

@Module({
  imports: [
    // Configuration Module
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),

    // Rate Limiting
    ThrottlerModule.forRoot([
      {
        ttl: 60,
        limit: 10,
      },
    ]),

    // Database Configuration
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get('DB_PORT', 5432),
        username: configService.get('DB_USERNAME', 'postgres'),
        password: configService.get('DB_PASSWORD', 'postgres'),
        database: configService.get('DB_NAME', 'usersdb'),
        entities: [User],
        synchronize:
          configService.get('NODE_ENV', 'development') === 'development',
        ssl:
          configService.get('NODE_ENV') === 'production'
            ? {
                rejectUnauthorized: false,
              }
            : false,
        logging: configService.get('NODE_ENV') === 'development',
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
  ],
  providers: [
    // Global Guards
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
