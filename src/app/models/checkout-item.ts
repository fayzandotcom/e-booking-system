import { Room } from "./room";

export class CheckoutItem {
    id:number;
    room:Room;
    quantity:number;

    constructor(id:number, room:Room, quantity:number) {
        this.id = id;
        this.room = room;
        this.quantity = quantity;
    }
}
