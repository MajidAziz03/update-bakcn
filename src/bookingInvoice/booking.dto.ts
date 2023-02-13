/* eslint-disable prettier/prettier */

export interface InvoiceBooking { 
  booking: {
    booking: string;
    bookingDate: Date;
    bookingBy: string;
    statusOfBooking: string;
    approvedBy: string;
    ref: number;
    agentPol: string;
    contactPerson: string;
    quantity: number;
    containerSize: string;
    containerType: string;
    portOfLoading: string;
    portOfFinal: string;
    commodity: string;
    dg: string;
    dgClass: string;
  };
}
