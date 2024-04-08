import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema(
  {},
  {
    timestamps: ture,
  }
);

export const MedicalRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordSchema
);
