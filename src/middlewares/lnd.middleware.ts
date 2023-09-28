import { authenticatedLndGrpc } from "lightning";
import { Request, Response, NextFunction } from "express";
import { cert, macaroon } from "../wallet.json";
import { config } from "../configs/index";
const LNDConnect = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { lnd } = authenticatedLndGrpc({
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

export default LNDConnect;
