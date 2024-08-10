import { model, Schema } from "mongoose";

const sessionSchema = new Schema(
  {
    accessToken: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
    accessTokenValidUntil: {
      type: Date,
      required: true,
    },
    refreshTokenValidUntil: {
      type: Date,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Session = model("session", sessionSchema);
export default Session;
