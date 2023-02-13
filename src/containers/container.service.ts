/* eslint-disable prettier/prettier */

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { Container } from './container.model';

@Injectable()
export class ContainerService {
  constructor(
    @InjectModel('containers')
    private containerModel: Model<Container>,
  ) {}

  async addContainer(cont): Promise<Container> {
    const newContainer = new this.containerModel(cont);
    const saved = await newContainer.save();
    return newContainer;
  }

  async getAll(): Promise<Container[]> {
    const newContainer = this.containerModel.find().exec();
    return newContainer;
  }

  async getContainer(userId): Promise<Container> {
    try {
      const container = await this.containerModel.findById(userId);
      if (container) {
        return container;
      }
      throw new InternalServerErrorException('Cannot find Client');
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve client');
    }
  }

  async deleteContainer(userId): Promise<any> {
    try {
      const container = await this.containerModel.findByIdAndDelete(userId);
      return 'Successfully Deleted';
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete container');
    }
  }

  async updateContainer(userId, data): Promise<any> {
    try {
      const container = await this.containerModel.findByIdAndUpdate(
        userId,
        data,
        {
          new: true,
        },
      );
      return container;
    } catch (error) {
      throw new InternalServerErrorException('Failed to Update Container');
    }
  }

  async insertManyContainerIds(containerIds: string[]) {
    const containers = containerIds.map((containerId) => ({ containerId }));
    await this.containerModel.insertMany(containers);
  }
}
