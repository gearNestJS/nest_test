import { Module } from '@nestjs/common';
import { UserModule } from '@user/user.module';
import { TypeOrmModule } from '@db/typeorm.module';
import { ConfigModule } from './config.module';

@Module({
  imports: [UserModule, TypeOrmModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
