import { NextFunction, Request, Response } from "express";

const controller = {
  check: async (req: Request, res: Response, next: NextFunction) => {
    if(!req.admin) {
        return res.status(401).json({
            success: false,
            message: "Unuthorized."
        })
    }

    return res.status(200).json({
        success: true,
        message: "Authorized."
    })
  },
};

export default controller;
