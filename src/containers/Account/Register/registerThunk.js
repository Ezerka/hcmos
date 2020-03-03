import firebase, { db } from '../../../config/firebase';

export const createUser = async data => {
  const user = {
    userName: data.username,
    email: data.email,
    phoneNumber: data.phonenumber,
    objectId: data.objectId
  };
  const increment = firebase.firestore.FieldValue.increment(1);

  const statsRef = await db.collection('--stats--').doc('customers');
  const userRef = await db.collection('users').doc(user.objectId.toString());

  const batch = db.batch();
  batch.set(userRef, user);
  batch.set(statsRef, { count: increment }, { merge: true });

  await batch.commit();
};
