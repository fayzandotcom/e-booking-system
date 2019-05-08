import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import { Room } from '../models/room';
import { CheckoutItem } from '../models/checkout-item';
import { CheckoutItemService } from '../services/checkout-item.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms:Room[] = [];
  displayRooms:Room[] = [];
  checkoutItems:CheckoutItem[] = [];

  message:string;

  constructor(private roomService:RoomService, private checkoutItemService:CheckoutItemService) {
  }

  ngOnInit() {

    this.rooms = this.roomService.getRooms();
    this.displayRooms = this.rooms;
  }

  addToCart(item:CheckoutItem) {
    this.checkoutItemService.addCheckoutItem(item);
    this.checkoutItems = this.checkoutItemService.getCheckoutItems();
  }

  changeText(event:any) {
    let searchvalue = event.target.value.toLowerCase();
    if (searchvalue == null || searchvalue === '') {
      this.displayRooms = this.rooms;
    } else {
      this.displayRooms = this.rooms.filter( (room) => {
        var regex = new RegExp(searchvalue);
        return room.roomType.toLowerCase().match(regex);
      });
    }

  }

}
