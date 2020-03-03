import {
  invoicesFetchError,
  invoicesFetchRequest,
  invoicesFetchSuccess
} from '../../../redux/actions/invoicesAction';
import firebase from '../../../config/firebase';
const db = firebase.firestore();
export const getInvoices = () => async dispatch => {
  try {
    const invoices = [];
    dispatch(invoicesFetchRequest());
    const response = await db
      .collection('invoices')
      .where('customerId', '==', 'zulXSMa25GMFEAIQzlqlVwZ26dP2')
      .get();
    for (const invoice of response.docs) {
      invoices.push(invoice.data());
    }
    dispatch(invoicesFetchSuccess(invoices));
  } catch (e) {
    dispatch(invoicesFetchError(e));
  }
};
