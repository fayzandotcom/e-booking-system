import { Injectable } from '@angular/core';
import { CheckoutItem } from '../models/checkout-item';

@Injectable({
  providedIn: 'root'
})
export class CheckoutItemService {

  checkoutItems:CheckoutItem[] = [];

  constructor() { }

  getCheckoutItems():CheckoutItem[] {
    return this.checkoutItems;
  }

  addCheckoutItem(checkoutItem:CheckoutItem) {
    this.checkoutItems.push(checkoutItem);
  }
}
