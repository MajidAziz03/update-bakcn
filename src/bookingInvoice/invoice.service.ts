/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { InvoiceBooking } from './booking.dto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel('bookingInvoices')
    private readonly bookingModel: Model<InvoiceBooking>,
  ) {}

  async create(invoice: InvoiceBooking): Promise<InvoiceBooking> {
    const newInvoice = await new this.bookingModel(invoice).save();
    return newInvoice;
  }

  async getAllInvoices(): Promise<InvoiceBooking[]> {
    try {
      const invoice = await this.bookingModel.find({}).exec();
      return invoice;
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve invoices');
    }
  }

  async getInvoice(InvoiceId): Promise<InvoiceBooking> {
    try {
      const Invoice = await this.bookingModel.findById(InvoiceId);
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
      const Invoice = await this.bookingModel.findByIdAndDelete(InvoiceId);
      return 'Successfully Deleted';
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete Invoice');
    }
  }

  async updateInvoice(InvoiceId, data): Promise<any> {
    try {
      const Invoice = await this.bookingModel.findByIdAndUpdate(
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
