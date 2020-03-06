import React from 'react';
import { Container, Button } from 'reactstrap';

const RazorpayPaymentForm = () => {
  const options = {
    key: 'rzp_test_uK9telCgOeSCRY',
    currency: 'INR',
    name: 'Invoice IN1000',
    order_id: 'order_EOFjVX8IeNvQ9a',
    handler: function(response, error) {
      console.log(response);
      alert(response);
    },
    notes: {
      address: 'note value'
    },
    theme: {
      color: '#4359f5'
      // background:
      //   'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(22,137,203,1) 0%,' +
      //   ' rgba(185,23,117,1) 100%)'
    }
  };
  const handleSubmit = event => {
    event.preventDefault();

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  };
  return (
    <Container>
      <Button color={'success'} onClick={handleSubmit}>
        Make Payment
      </Button>
    </Container>
  );
};

export default RazorpayPaymentForm;
