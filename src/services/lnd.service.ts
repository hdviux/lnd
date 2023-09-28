import {
  getInvoices,
  createInvoice,
  getInvoice,
  unlockWallet,
} from "lightning";

export const ListInvoices = async (lnd: any) => {
  try {
    const { invoices } = await getInvoices({ lnd });
    return invoices;
  } catch (error) {
    console.log(error);
  }
};

export const CreateInvoice = async (lnd: any, amount: any) => {
  let isInvoice = false;
  async function addInvoice() {
    isInvoice = true;
    await createInvoice({ lnd, tokens: amount });
  }
  async function getInvoice() {
    const { invoices } = await getInvoices({ lnd });
    return invoices[0];
  }
  addInvoice();
  let rs = null;
  if (isInvoice !== false) {
    rs = await getInvoice();
  }
  return rs;
};

export const GetInvoiceById = async (lnd: any, id: any) => {
  const invoiceDetails = await getInvoice({ id, lnd });
  return invoiceDetails;
};

export const UnLock = async (lnd: any, password: any) => {
  const rs = await unlockWallet({ lnd, password });
  return rs;
};
