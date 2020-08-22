/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51HJ3Z9DIRKmC2CSmVBDvq8amlLpc6p6UNV9N61uLh6NrMOcPN8IYjfIiDQjgUdHPep1YmDtOuXj2fw8fqcSSGxNZ00pnkPD7fE');
	


export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
