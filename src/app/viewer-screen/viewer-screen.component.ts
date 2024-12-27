import { Component, OnInit } from '@angular/core';
import { ViewerservicesService } from './services/viewerservices.service';

@Component({
  selector: 'app-viewer-screen',
  templateUrl: './viewer-screen.component.html',
  styleUrls: ['./viewer-screen.component.css']
})
export class ViewerScreenComponent implements OnInit {
  presentActiveComponent: string = 'MyProfile';

  constructor(private _service: ViewerservicesService){}

  ngOnInit(): void {
      this._service.GetMyDetails().subscribe({
        next: (data: any) => {
            console.log(data);
            
        },
        error: (err:any) => {
            console.log(err);
            
        },
      })
  }

  setPresentActiveComponent(component: string ){
    this.presentActiveComponent = component;
  }

}
