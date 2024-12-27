import { Component, OnInit } from '@angular/core';
import { ViewerservicesService } from '../services/viewerservices.service';
import { MyModel, TicketModel } from 'src/app/Models';
import { ShowService } from 'src/app/Services/show.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
})
export class MyprofileComponent implements OnInit {
  myDetails: MyModel = {};
  myTickets: any[] = [];

  constructor(private _services: ViewerservicesService) {}
  ngOnInit(): void {
    this._services.GetMyDetails().subscribe({
      next: (data: any) => {
        this.myDetails = data;
        this._services.GetMyTickets(this.myDetails.userID!).subscribe({
          next: (data: any) => {
            this.myTickets = data;
            this.myTickets.map((ticket) => {
              ticket.seats = JSON.parse(ticket.seats);
            });
            console.log(this.myTickets);
          },
          error(err: any) {
            console.log(err);
          },
        });
        console.log(this.myDetails);
      },
      error(err: any) {
        console.log(err);
      },
    });
  }
}
