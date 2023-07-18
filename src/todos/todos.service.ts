import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Todo} from "./entities/todo.entity";
import {v4 as uuid} from "uuid";

@Injectable()
export class TodosService {
  constructor(@InjectRepository(Todo) private readonly todosRepository: Repository<Todo>){}

  async create(createTodoDto: CreateTodoDto) {
    const newTodo: Todo = {
      ...createTodoDto,
      id: uuid(),
    }
    const todo = this.todosRepository.create(newTodo);
    return await this.todosRepository.save(todo);
  }

  async findAll() {
    const todos = this.todosRepository.find();
    return await todos;
  }

  async findOne(id: string) {
    const todo = this.todosRepository.findOne({ where: { id } });
    return await  todo;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const uptatedTodo = this.todosRepository.update({id}, updateTodoDto);
    return await uptatedTodo
  }

  async remove(id: string) {
    const deletedTodo = this.todosRepository.delete({id});
    return await deletedTodo
  }
}
