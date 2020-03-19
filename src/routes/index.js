import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Order from '~/pages/Order/OrderDashboard';
import OrderRegister from '~/pages/Order/OrderRegister';
import OrderUpdate from '~/pages/Order/OrderUpdate';

import DeliveryMan from '~/pages/DeliveryMan/DeliveryManDashboard';
import DeliveryManRegister from '~/pages/DeliveryMan/DeliveryManRegister';
import DeliveryManUpdate from '~/pages/DeliveryMan/DeliveryManUpdate';

import Recipient from '~/pages/Recipient/RecipientDashboard';
import RecipientRegister from '~/pages/Recipient/RecipientRegister';
import RecipientUpdate from '~/pages/Recipient/RecipientUpdate';

import Problems from '~/pages/Problems';

import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ SignIn } />
      <Route path="/orders" component={ Order } isPrivate />
      <Route path="/orderRegister" component={ OrderRegister } isPrivate />
      <Route path="/orderUpdate" component={ OrderUpdate } isPrivate />
      <Route path="/deliverymans" component={ DeliveryMan } isPrivate />
      <Route path="/registerDeliveryMan" component={ DeliveryManRegister } isPrivate />
      <Route path="/deliveryManUpdate" component={ DeliveryManUpdate } isPrivate />
      <Route path="/recipients" component={ Recipient } isPrivate />
      <Route path="/registerRecipient" component={ RecipientRegister } isPrivate />
      <Route path="/registerUpdate" component={ RecipientUpdate } isPrivate />
      <Route path="/problems" component={ Problems } isPrivate />
      <Route path="/profile" component={ Profile } isPrivate />
    </Switch>
  );
}
