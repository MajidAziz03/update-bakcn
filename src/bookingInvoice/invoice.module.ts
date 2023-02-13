/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceController } from './invoice.controller';
import { BookingSchema } from './booking.schema';
import { InvoiceService } from './invoice.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'bookingInvoices', schema: BookingSchema },
    ]),
  ],
  providers: [InvoiceService],
  controllers: [InvoiceController],
})
export class InvoiceModule {}
