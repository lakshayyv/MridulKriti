import { Admin } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { db } from "../config/db";
import {
  handleCreateHash,
  handleJWTAndCookie,
  handleVerifyHash,
} from "../utils/handlers";

const controller = {
  signup: async (req: Request, res: Response, next: NextFunction) => {
    const payload: Admin = req.body;
    payload.password = handleCreateHash(payload.password);

    const response = await db.admin.create({ data: payload });
    const token = handleJWTAndCookie(response, res);

    return res.status(200).json({
      success: true,
      message: token,
    });
  },

  signin: async (req: Request, res: Response, next: NextFunction) => {
    const payload: Admin = req.body;

    const exist = await db.admin.findUnique({
      where: { email: payload.email },
    });
    if (!exist) {
      return res.status(400).json({
        success: false,
        message: "User doesn't exist.",
      });
    }

    const match = handleVerifyHash(payload.password, exist.password);
    if (!match) {
      return res.status(400).json({
        success: false,
        message: "Invalid password.",
      });
    }

    const token = handleJWTAndCookie(exist, res);

    return res.status(200).json({
      success: true,
      message: token,
    });
  },
};

export default controller;
