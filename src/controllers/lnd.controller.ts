import * as Srv from "../services/lnd.service";
import { Request, Response } from "express";

export const ListInvoices = async (req: Request, res: Response) => {
  try {
    const rs = await Srv.ListInvoices(req["lnd"]);
    if (rs) {
      res.status(200).send({ status: true, data: rs });
    } else {
      res.status(400).send({ status: false });
    }
  } catch (error) {
    res.status(400).send({ status: false, message: (error as Error).message });
  }
};

export const CreateInvoice = async (req: Request, res: Response) => {
  try {
    const rs = await Srv.CreateInvoice(req["lnd"], req.body.amount);
    if (rs !== null) {
      res.status(200).send({ status: true, data: rs });
    } else {
      res.status(400).send({ status: false });
    }
  } catch (error) {
    res.status(400).send({ status: false, message: (error as Error).message });
  }
};

export const GetInvoiceById = async (req: Request, res: Response) => {
  try {
    const rs = await Srv.GetInvoiceById(req["lnd"], req.params.id);
    if (rs !== null) {
      res.status(200).send({ status: true, data: rs });
    } else {
      res.status(400).send({ status: false });
    }
  } catch (error) {
    res.status(400).send({ status: false, message: (error as Error).message });
  }
};

export const UnLock = async (req: Request, res: Response) => {
  try {
    const rs = await Srv.UnLock(req["lnd"], req.body.password);
    if (rs !== null) {
      res.status(200).send({ status: true, data: rs });
    } else {
      res.status(400).send({ status: false });
    }
  } catch (error) {
    res.status(400).send({ status: false, message: (error as Error).message });
  }
};
