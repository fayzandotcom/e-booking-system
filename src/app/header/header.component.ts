import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appTitle:string;
  formatRules:any = {
    prefix:"<| ",
    suffix:" |>",
    times: 1
  };

  constructor() { 
    this.appTitle = "E-Booking System";
  }

  ngOnInit() {
  }

}
