import {
  getInvoices,
  createInvoice,
  getInvoice,
  unlockWallet,
} from "lightning";

export const ListInvoices = async (lnd: any) => {
  const { invoices } = await getInvoices({ lnd });
  return invoices;
};

export const CreateInvoice = async (lnd: any, amount: any) =>
  createInvoice({ lnd, tokens: amount });

export const NewInvoice = async (lnd: any) => {
  const { invoices } = await getInvoices({ lnd });
  return invoices[0];
};

export const GetInvoiceById = async (lnd: any, id: any) => {
  const invoiceDetails = await getInvoice({ id, lnd });
  return invoiceDetails;
};

export const UnLock = async (lnd: any, password: any) => {
  const rs = await unlockWallet({ lnd, password });
  return rs;
};
