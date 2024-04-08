import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    salary: {
      type: Number,
      required: true,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true,
      },
    ],
  },
  {
    timestamps: ture,
  }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
