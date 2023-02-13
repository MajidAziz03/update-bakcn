/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ClientsModule } from './clients/clients.module';
import { InvoiceModule } from './bookingInvoice/invoice.module';
import { ContainerModule } from './containers/container.module';
import { ReportModule } from './report/report.module';
import { ProfitReportModule } from './profit-report/profit-report.module';
import { RepairInvoiceModule } from './repairInvoice/invoice.module';
import { ShipperModule } from './SentToShipper/invoice.module';

// mongodb+srv://sleep:12345@nest-pd.2m32c.mongodb.net/?retryWrites=true&w=majority

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://majid_aziz03:majid_aziz03@cluster0.ftuo64y.mongodb.net/fyp?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    UserModule,
    ClientsModule,
    InvoiceModule,
    ContainerModule,
    ReportModule,
    ProfitReportModule,
    RepairInvoiceModule,
    ShipperModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
