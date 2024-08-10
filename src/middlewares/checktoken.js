import createHttpError from "http-errors";
import { findeSession, userById } from "../services/users";

export const checkToken = async (req, res, next) => {
    const header = req.get("Authorization");
    if (!header) {
        next(createHttpError(401, "No athorisation"));
        return;
    }
    const [bearer, token] = header.split(' ');
    if (bearer !== 'Bearer' || !token) {
        next(createHttpError(401, "No athorisation"));
        return;
    }
    const session = await findeSession(token);
    if (!session) {
        next(createHttpError(401, "No athorisation"));
        return;
    }
    if (Date.now() > session.accessTokenValidUntil) {
        next(createHttpError(401, "No athorisation"));
        return;
    };
    
    const user = await userById(session.userId);
    if (!user) {
      next(createHttpError(401, "No athorisation"));
      return;   
    }
    req.user = user;
    next();
};
