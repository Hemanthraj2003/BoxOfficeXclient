import { Component, inject, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShowService } from '../Services/show.service';

@Component({
  selector: 'app-seatmatrix',
  templateUrl: './seatmatrix.component.html',
  styleUrls: ['./seatmatrix.component.css']
})
export class SeatmatrixComponent implements OnInit  {
  private _snackBar = inject(MatSnackBar);
  @Input() data!: {[key: string]: boolean};
  count: number = 0;
  selectedSeat: {[key: string]: boolean} ={};

  constructor(private _showSerivice: ShowService){}

  ngOnInit(): void {
      console.log(this.data);
      this._showSerivice.selectedSeat$.subscribe({
        next: (data: any) =>{
          console.log(data);
          
          this.selectedSeat = data
          this.count = Object.keys(this.selectedSeat).length;
        },
        error: (err: any) =>{
          console.log(err);
          
        }
      })    
    }

  setValue(key: string ){
    console.log(this.data[key]);
    if (this.selectedSeat[key]) {
      this._showSerivice.toggleSelectedSeat(key);
    }
    else if (!this.data[key] && this.count<2) {
      this._showSerivice.toggleSelectedSeat(key);     
    }else if (this.count ==2){
      this._snackBar.open('Cannot select more than two seat', 'close', {duration: 3000});
    }
    
  }

}
