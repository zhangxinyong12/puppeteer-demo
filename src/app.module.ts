import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// 引入数据库的及配置文件
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

const ormconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'rm-wz9i6arsb4631oj1e2o.mysql.rds.aliyuncs.com',
  port: 3306,
  username: 'zhang',
  password: 'WOziji123456',
  database: 'juejin_cookies_json',
  entities: ['dist/**/*.entity{.ts,.js}'],
  timezone: 'UTC',
  charset: 'utf8mb4',
  multipleStatements: true,
  dropSchema: false,
  synchronize: false, // 会自动同步创建数据库修改表结构 慎用 /** Invalid use of NULL value */
  logging: true,
  // autoLoadEntities: true,
};
@Module({
  imports: [
    TypeOrmModule.forRoot({ ...ormconfig }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
