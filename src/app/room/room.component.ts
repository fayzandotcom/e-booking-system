import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Room } from '../models/room';
import { CheckoutItem } from '../models/checkout-item';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input()
  room:Room;

  @Input()
  showForm:boolean;

  @Output()
  notify:EventEmitter<CheckoutItem> = new EventEmitter<CheckoutItem>();

  constructor() { }

  ngOnInit() {
  }

  addToCart(room:Room, selectedQty:number) {
    let item:CheckoutItem = new CheckoutItem(0, room, selectedQty);
    this.notify.emit(item);
  }

}
