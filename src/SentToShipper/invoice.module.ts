/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceController } from './invoice.controller';
import { ShipperSchema } from './shipper.schema';
import { InvoiceService } from './invoice.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'shipperInvoices', schema: ShipperSchema },
    ]),
  ],
  providers: [InvoiceService],
  controllers: [InvoiceController],
})
export class ShipperModule {}
