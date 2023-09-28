import { unauthenticatedLndGrpc } from "lightning";
import { Request, Response, NextFunction } from "express";
import { cert, macaroon } from "../wallet.json";
import { config } from "../configs/index";
const UnLockConnect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { lnd } = unauthenticatedLndGrpc({
      cert: cert,
      macaroon: macaroon,
      socket: config.socket,
    } as any);
    req["lnd"] = lnd;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default UnLockConnect;
