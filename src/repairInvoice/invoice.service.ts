/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { InvoiceRepair } from './invoiceRepair.dto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel('repairInvoices')
    private readonly repairModel: Model<InvoiceRepair>,
  ) {}

  async create(invoice: InvoiceRepair): Promise<InvoiceRepair> {
    const newInvoice = await new this.repairModel(invoice).save();
    return newInvoice;
  }

  async getAllInvoices(): Promise<InvoiceRepair[]> {
    try {
      const invoice = await this.repairModel.find({}).exec();
      return invoice;
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve invoices');
    }
  }

  async getInvoice(InvoiceId): Promise<InvoiceRepair> {
    try {
      const Invoice = await this.repairModel.findById(InvoiceId);
      if (Invoice) {
        return Invoice;
      }
      throw new InternalServerErrorException('Cannot find Invoice');
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve Invoice');
    }
  }

  async deleteInvoice(InvoiceId): Promise<any> {
    try {
      const Invoice = await this.repairModel.findByIdAndDelete(InvoiceId);
      return 'Successfully Deleted';
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete Invoice');
    }
  }

  async updateInvoice(InvoiceId, data): Promise<any> {
    try {
      const Invoice = await this.repairModel.findByIdAndUpdate(
        InvoiceId,
        data,
        {
          new: true,
        },
      );
      return Invoice;
    } catch (error) {
      throw new InternalServerErrorException('Failed to Update Invoice');
    }
  }
}
