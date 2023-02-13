/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { InvoiceShipper } from './shipper.dto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel('shipperInvoices')
    private readonly shipperModel: Model<InvoiceShipper>,
  ) {}

  async create(invoice: InvoiceShipper): Promise<InvoiceShipper> {
    const newInvoice = await new this.shipperModel(invoice).save();
    return newInvoice;
  }

  async getAllInvoices(): Promise<InvoiceShipper[]> {
    try {
      const invoice = await this.shipperModel.find({}).exec();
      return invoice;
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve invoices');
    }
  }

  async getInvoice(InvoiceId): Promise<InvoiceShipper> {
    try {
      const Invoice = await this.shipperModel.findById(InvoiceId);
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
      const Invoice = await this.shipperModel.findByIdAndDelete(InvoiceId);
      return 'Successfully Deleted';
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete Invoice');
    }
  }

  async updateInvoice(InvoiceId, data): Promise<any> {
    try {
      const Invoice = await this.shipperModel.findByIdAndUpdate(
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
