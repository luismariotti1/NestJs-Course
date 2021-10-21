import { EntityRepository, Repository } from 'typeorm';
import { TaskEntity } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './tasks-status.enum';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@EntityRepository(TaskEntity)
export class TasksRepository extends Repository<TaskEntity> {
  async getTasks(filterDto: GetTasksFilterDto): Promise<TaskEntity[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('task');

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        'Lower(task.title) LIKE Lower(:search) OR Lower(task.description) LIKE Lower(:search)',
        { search: `%${search}%` },
      );
    }

    return await query.getMany();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    const { title, description } = createTaskDto;

    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.save(task);

    return task;
  }
}
