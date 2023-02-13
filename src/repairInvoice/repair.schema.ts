/* eslint-disable prettier/prettier */

import * as mongoose from 'mongoose';

export const RepairSchema = new mongoose.Schema({
  repairType: String,
  billNo: String,
  dateOfIssue: {
    type: Date,
    default: Date.now,
  },
  containerNo: String,
  haulierRefusal: Number,
  repairEstimate: {
    jobA: Number,
    jobB: Number,
    jobC: Number,
  },
  repairEstimateAttachment: {
    RepairApprovalEsl: Number,
    jobANetAmount: String,
    jobATaxAmount: Number,
    jobAGrossAmount: Number,
    jobBNetAmount: String,
    jobBTaxAmount: Number,
    jobBGrossAmount: Number,
  },
  taxAmount: Number,
  totalAmount: Number,
  repairApprovalAttachment: {
    DamagePicturesUpload: String,
    postRepairPicturesUpload: String,
  },
});

//   sentToShipper: {
//     type: Object,
//     // required: true,
//     booking: Number,
//     bookingDate: {
//       type: Date,
//       default: Date.now(),
//     },
//     statusOfBooking: String,
//     sentToShipperDoc: String,
//     sentToShipperDate: {
//       type: Date,
//       default: Date.now(),
//     },
//     statusOfStsDoc: String,
//     HaulierRefusal: Boolean,
//     agentPol: String,
//     contactPerson: String,
//     freeDays: Number,
//     postOfLoading: String,
//   },
// });
