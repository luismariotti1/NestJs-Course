import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: ,
      password: ,
      database: 'task-management',
    }),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
