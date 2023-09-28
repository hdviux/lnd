import express from "express";
import * as LNDController from "../controllers/lnd.controller";
import LNDConnect from "../middlewares/lnd.middleware";
import UnLockConnect from "../middlewares/unLockLnd.middleware";
const router = express.Router();

const minorRoot = "/lnd";

router.get(`${minorRoot}/ListInvoices`, LNDConnect, LNDController.ListInvoices);
router.post(
  `${minorRoot}/CreateInvoice`,
  LNDConnect,
  LNDController.CreateInvoice
);
router.get(
  `${minorRoot}/GetInvoiceById/:id`,
  LNDConnect,
  LNDController.GetInvoiceById
);
router.post(`${minorRoot}/UnLock`, UnLockConnect, LNDController.UnLock);
export default router;
