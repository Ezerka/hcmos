import firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyDn1kAPpSLARPrSBb83SZruTaC6qcCH49g',
  authDomain: 'ims-invoice-management-system.firebaseapp.com',
  databaseURL: 'https://ims-invoice-management-system.firebaseio.com',
  projectId: 'ims-invoice-management-system',
  storageBucket: 'ims-invoice-management-system.appspot.com',
  messagingSenderId: '82002035448',
  appId: '1:82002035448:web:7b4e1e352e5b69fe68b10d'
};
firebase.initializeApp(config);
export const db = firebase.firestore();
export default firebase;
