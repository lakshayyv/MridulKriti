import { NextFunction, Request, Response } from "express";
import { handleVerifyJWT } from "../utils/handlers";
import { db } from "../config/db";

const middleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized.",
    });
  }

  const payload = handleVerifyJWT(token);

  const exist = await db.admin.findUnique({ where: { id: payload.id } });

  if (!exist) {
    res.clearCookie("token");
    return res.status(400).json({
      success: false,
      message: "Unauthorized.",
    });
  }

  req.admin = exist;
  next();
};

export default middleware;
