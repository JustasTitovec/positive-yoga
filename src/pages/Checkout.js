import React from 'react';
// Components imports
import Preheader from '../components/Preheader';
import Header from '../components/Header';
import Subscriptions from '../components/Subscriptions';
import Reviews from '../components/Reviews';
import AppSection from '../components/AppSection';
import Questions from '../components/Questions';
import PlansOrderCount from '../components/PlansOrderCount';

const Checkout = () => {
  return (
    <>
      <Preheader />
      <Header />
      <PlansOrderCount />
      <Subscriptions title="Get access to your yoga program now!" />
      <Reviews />
      <AppSection />
      <Questions />
      <Subscriptions title="Start your yoga program today!" />
    </>
  );
};

export default Checkout;
