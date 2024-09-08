import { Image } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";
import { NextFunction, Request, Response } from "express";
import { db } from "../config/db";

const controller = {
  upload: async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;

    const result = await cloudinary.uploader.upload(
      `data:image/jpeg;base64,${payload.image}`
    );

    const response = await db.image.create({
      data: {
        title: payload.title,
        description: payload.description,
        url: result.secure_url,
        publicId: result.public_id,
      },
    });

    return res.status(200).json({
      success: true,
      message: response,
    });
  },
};

export default controller;
