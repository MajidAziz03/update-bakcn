/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import {
  Controller,
  Put,
  Req,
  UseGuards,
  Patch,
  Query,
  Post,
  Get,
  Header,
  Res,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './clients.model';

@Controller('clients')
export class ClientsController {
  constructor(private clientService: ClientsService) {}

  @Post('')
  createClient(@Body() reqBody: any) {
    return this.clientService.addClient(reqBody);
  }

  @Get('findAll')
  getAllClients() {
    return this.clientService.getAllClients();
  }

  @Get(':id')
  getClient(@Param('id') userId: string) {
    return this.clientService.getClient(userId);
  }

  @Delete(':id')
  deleteClient(@Param('id') userId: string) {
    return this.clientService.deleteClient(userId);
  }

  @Put(':id')
  updateClient(@Param('id') userId, @Body() data) {
    return this.clientService.updateClient(userId, data);
  }
}
