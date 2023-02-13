/* eslint-disable prettier/prettier */

export interface InvoiceShipper {
  booking: number;
  bookingDate: Date;
  statusOfBooking: string;
  sentToShipperDoc: string;
  sentToShipperDate: Date;
  statusOfStsDoc: string;
  HaulierRefusal: string;
  agentPol: string;
  contactPerson: string;
  freeDays: number;
  portOfLoading: string;
}
