import { Schema, models, model } from "mongoose";

import { Document, Types } from "mongoose";

export interface IImage extends Document {
  name: string;
  transformationType: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const ImageScheema = new Schema({
  name: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: String, required: true },
  width: { type: Number },
  height: { type: Number },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updateddAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageScheema);

export default Image;
