import { db } from '../../../config/firebase';
import {
  invoiceDetailFetchError,
  invoiceDetailFetchRequest,
  invoiceDetailFetchSuccess
} from '../../../redux/actions/invoiceDetailActions';

export const getInvoiceDetail = invoiceId => async dispatch => {
  try {
    dispatch(invoiceDetailFetchRequest());
    const response = await db
      .collection('invoices')
      .doc(invoiceId)
      .get();
    console.log(response.data());
    dispatch(invoiceDetailFetchSuccess(response.data()));
  } catch (e) {
    console.log(e.message);
    dispatch(invoiceDetailFetchError(e.message));
  }
};
