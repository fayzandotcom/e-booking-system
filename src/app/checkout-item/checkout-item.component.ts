import { Component, OnInit, Input } from '@angular/core';
import { CheckoutItem } from '../models/checkout-item';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})
export class CheckoutItemComponent implements OnInit {

  @Input()
  checkoutItems:CheckoutItem[];

  constructor() { }

  ngOnInit() {
  }

}
