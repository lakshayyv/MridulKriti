import { Image } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";
import { NextFunction, Request, Response } from "express";
import { db } from "../config/db";

const controller = {
  upload: async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;

    const result = await cloudinary.uploader.upload(payload.image);

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

  fetchAll: async (req: Request, res: Response, next: NextFunction) => {
    const response = await db.image.findMany();

    return res.status(200).json({
      success: true,
      message: response,
    });
  },

  fetchById: async (req: Request, res: Response, next: NextFunction) => {
    const imageId: string = req.params.id;

    if (!imageId) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong.",
      });
    }

    const response = await db.image.findUnique({ where: { id: imageId } });

    return res.status(200).json({
      success: true,
      message: response,
    });
  },
};

export default controller;
