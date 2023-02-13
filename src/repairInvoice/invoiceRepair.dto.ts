/* eslint-disable prettier/prettier */
export interface InvoiceRepair {
  repairType: string;
  billNo: string;
  dateOfIssue: Date;
  containerNo: string;
  haulierRefusal: number;
  repairEstimate: {
    jobA: number;
    jobB: number;
    jobC: number;
  };
  repairEstimateAttachment: {
    RepairApprovalEsl: number;
    jobANetAmount: string;
    jobATaxAmount: number;
    jobAGrossAmount: number;
    jobBNetAmount: string;
    jobBTaxAmount: number;
    jobBGrossAmount: number;
  };
  taxAmount: number;
  totalAmount: number;
  repairApprovalAttachment: {
    DamagePicturesUpload: string;
    postRepairPicturesUpload: string;
  };
}
