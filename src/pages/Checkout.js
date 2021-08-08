import React from 'react';
import Preheader from '../components/Preheader';
import Header from '../components/Header';
import Subscriptions from '../components/Subscriptions';
import Reviews from '../components/Reviews';
import AppSection from '../components/AppSection';
import Questions from '../components/Questions';

const Checkout = () => {
  return (
    <>
      <Preheader />
      <Header />
      <Subscriptions />
      <Reviews />
      <AppSection />
      <Questions />
      <Subscriptions />
    </>
  );
};

export default Checkout;
