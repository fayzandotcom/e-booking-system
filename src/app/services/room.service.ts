import { Injectable } from '@angular/core';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private rooms:Room[] = [];

  constructor() {
    this.rooms.push(new Room(1, "Deluxe", 180, 3, "https://d11kdcggr4h8di.cloudfront.net/wp-content/uploads/sites/29/2016/02/28172402/content_13155_1.jpg"));
    this.rooms.push(new Room(2, "Supreme", 150, 4, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrU3Fnajk9hZDgqhs72n40O8xDOBPRN-R8r8tl4VODuBdzAxincg"));
    this.rooms.push(new Room(3, "Family", 200, 5, "https://eastshorelodging.com/wp-content/uploads/2018/04/Room-8-beds-300x200.jpg"));
    this.rooms.push(new Room(4, "Single", 100, 8, "http://dwjhotel.com.my/wp-content/uploads/2016/03/Single-Room-2-300x200.jpg"));
    this.rooms.push(new Room(5, "Double", 150, 5, "https://www.lightkeepersinn.com.au/content/room/thumb/Standard_Double_Room_Lightkeepers_Inn_Motel_Aireys_Inlet-59-18.jpg"));
  }

  public getRooms():Room[] {
    return this.rooms;
  }
}
