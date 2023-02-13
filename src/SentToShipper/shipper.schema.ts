/* eslint-disable prettier/prettier */

import * as mongoose from 'mongoose';

export const ShipperSchema = new mongoose.Schema({
  booking: Number,
  bookingDate: {
    type: Date,
    default: Date.now(),
  },
  statusOfBooking: String,
  sentToShipperDoc: String,
  sentToShipperDate: {
    type: Date,
    default: Date.now(),
  },
  statusOfStsDoc: String,
  HaulierRefusal: String,
  agentPol: String,
  contactPerson: String,
  freeDays: Number,
  portOfLoading: String,
});
