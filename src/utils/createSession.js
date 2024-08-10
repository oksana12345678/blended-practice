import crypto from "node:crypto";
import {
  ACCESS_TOKEN_VALID_UNTIL,
  REFRESH_TOKEN_VALID_UNLIT,
} from "../constants/contants.js";

export const createSession = () => ({
  accessToken: crypto.randomBytes(30).toString("base64"),
  refreshToken: crypto.randomBytes(30).toString("base64"),
  accessTokenValidUntil: ACCESS_TOKEN_VALID_UNTIL,
  refreshTokenValidUntil: REFRESH_TOKEN_VALID_UNLIT,
});
