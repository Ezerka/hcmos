import {
  invoicesFetchError,
  invoicesFetchRequest,
  invoicesFetchSuccess
} from '../../../redux/actions/invoicesAction';

import { db } from '../../../config/firebase';

export const getInvoices = uid => async dispatch => {
  try {
    const invoices = [];
    dispatch(invoicesFetchRequest());
    const response = await db
      .collection('invoices')
      .where('customerId', '==', uid)
      .get();
    for (const invoice of response.docs) {
      invoices.push(invoice.data());
    }
    dispatch(invoicesFetchSuccess(invoices));
  } catch (e) {
    dispatch(invoicesFetchError(e));
  }
};
