/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';
import { RepairSchema } from './repair.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'repairInvoices', schema: RepairSchema },
    ]),
  ],
  providers: [InvoiceService],
  controllers: [InvoiceController],
})
export class RepairInvoiceModule {}
