import mongoose, { Mongoose } from "mongoose";

const MONGODB_KEY = process.env.MONGODB_KEY;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_KEY) throw new Error("Missing MONGODB_KEY");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_KEY, {
      dbName: "imaginify",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
