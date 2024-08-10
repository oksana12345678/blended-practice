import { REFRESH_TOKEN_VALID_UNLIT } from "../constants/contants.js";

export const setUpCookies = (res, session) => {
  const { refreshToken, _id } = session;
  res.cookie("refresh-token", refreshToken, {
    httpOnly: true,
    expires: new Date(REFRESH_TOKEN_VALID_UNLIT),
  });
  res.cookie("session-id", _id, {
    httpOnly: true,
    expires: new Date(REFRESH_TOKEN_VALID_UNLIT),
  });
};
