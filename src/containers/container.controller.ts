/* eslint-disable prettier/prettier */

import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ContainerService } from './container.service';
import { Container } from './container.model';

@Controller('containers')
export class ContainerController {
  constructor(private containerService: ContainerService) {}

  @Post('')
  async create(@Body() reqBody: Container) {
    return this.containerService.addContainer(reqBody);
  }

  @Get('findAll')
  async get() {
    return this.containerService.getAll();
  }

  @Get(':id')
  getClient(@Param('id') userId: string) {
    return this.containerService.getContainer(userId);
  }

  @Delete(':id')
  deleteClient(@Param('id') userId: string) {
    return this.containerService.deleteContainer(userId);
  }

  @Put(':id')
  updateClient(@Param('id') userId, @Body() data) {
    return this.containerService.updateContainer(userId, data);
  }

  @Post('insert')
  async insertMany(@Body('containerIds') containerIds: string[]) {
    await this.containerService.insertManyContainerIds(containerIds);
  }
}
