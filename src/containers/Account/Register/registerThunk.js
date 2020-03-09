import axios from '../../../config/axios';

export const createUser = async data => {
  const user = {
    name: data.username,
    email: data.email,
    number: data.phonenumber,
    uid: data.uid
  };
  await axios({
    method: 'post',
    url: '/customers',
    data: user
  });
};
