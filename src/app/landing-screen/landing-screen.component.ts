import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LandingPageService } from '../Services/landing-page.service';
// import { LoginModalComponent } from './login-modal/login-modal.component';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.css']
})
export class LandingScreenComponent implements OnInit {
  isLoginVisible: boolean = false;
  isSigninVisible: boolean = false;

  // injecting the landingpage service into the component
  constructor(private landingPageService: LandingPageService){}

  // called once when the component is initialized/loaded
  ngOnInit(): void {
    // we are subscribing to the variable loginModalVisibility, listinging to the changes made to it
      this.landingPageService.loginModalVisibility.subscribe( value=>{
        this.isLoginVisible = value;
      })
      this.landingPageService.signinModalVisibility.subscribe(value => {
        this.isSigninVisible = value;
      })
  }
  openLogin(){

    this.landingPageService.toggleLoginModelVisibility();
  }

  openSignin(){
    this.landingPageService.toggleSigninModelVisibility();
  }
  
  
}
