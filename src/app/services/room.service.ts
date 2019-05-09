import { Injectable } from '@angular/core';
import { Room } from '../models/room';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient:HttpClient) {
  }

  public getRooms():Observable<Room[]> {
    return this.httpClient.get<Room[]>('http://localhost:3000/rooms');
  }
}
