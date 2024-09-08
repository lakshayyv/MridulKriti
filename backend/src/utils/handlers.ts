import { Admin } from "@prisma/client";
import { Response } from "express";
import { createHmac } from "node:crypto";
import jwt, { Jwt, JwtPayload } from "jsonwebtoken";

export const handleJWTAndCookie = (response: Admin, res: Response): string => {
  const payload: JwtPayload = { id: response.id, email: response.email };

  const secret = process.env.JWT_SECRET || "secret";
  const token = jwt.sign(payload, secret);

  res.cookie("token", token);
  return token;
};

export const handleCreateHash = (password: string): string => {
  const algorithm = process.env.CRYPTO_ALGORITHM || "sha256";
  const secret = process.env.CRYPTO_SECRET || "secret";

  const hash = createHmac(algorithm, secret).update(password).digest("hex");

  return hash;
};

export const handleVerifyHash = (password: string, hash: string): Boolean => {
  const hashed = handleCreateHash(password);

  return hashed === hash;
};

export const handleVerifyJWT = (token: string): JwtPayload => {
  const secret = process.env.JWT_SECRET || "secret";
  const payload: JwtPayload = jwt.verify(token, secret) as JwtPayload;

  return payload;
};
