import { Component, OnInit } from '@angular/core';
import { ViewerservicesService } from '../services/viewerservices.service';

@Component({
  selector: 'app-mytickets',
  templateUrl: './mytickets.component.html',
  styleUrls: ['./mytickets.component.css'],
})
export class MyticketsComponent {
  // constructor(private _service: ViewerservicesService){}
  // ngOnInit(): void {
  //     this._service.GetMyTickets().subscribe({
  //       next: (data: any) => {
  //         console.log(data);
  //       },
  //       error(err: any) {
  //           console.log(err);
  //       },
  //     })
  //     this._service.GetMyTranscations().subscribe({
  //       next: (data: any) => { console.log(data);
  //       },
  //       error(err: any) {console.log(err);
  //       }
  //     })
  // }
}
