import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  //template: `<hr/>
  //          <p style="text-align: center">{{message}}</p>`,
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  message:string;
  currentDate:Date;

  formatRules:any = {
    prefix:"<",
    suffix:">",
    times: 3
  }

  constructor() {
    this.message = "Copyright @C to E-Booking Application";
    this.currentDate = new Date();
  }

  ngOnInit() {
  }

}
