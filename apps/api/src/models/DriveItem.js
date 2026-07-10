import mongoose from "mongoose";

const driveItemSchema = new mongoose.Schema(
  {
    ownerUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    type: { type: String, enum: ["folder", "file"], required: true, index: true },
    name: { type: String, required: true, trim: true, maxlength: 255 },
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: "DriveItem", default: null, index: true },
    fileObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FileObject",
      default: null,
      unique: true,
      sparse: true,
      index: true,
    },
  },
  { timestamps: true }
);

driveItemSchema.index({ ownerUserId: 1, parentId: 1, name: 1 });
driveItemSchema.index({ ownerUserId: 1, parentId: 1, createdAt: -1 });

export const DriveItem = mongoose.model("DriveItem", driveItemSchema);
