import { Component } from '@angular/core';
import { LoginModel } from 'src/app/Models';
import { LandingPageService } from 'src/app/Services/landing-page.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  
  constructor(private landingPageServices: LandingPageService){}

  loginrecord = new LoginModel();

  // isVisible = false;
    onLogin(){
      console.log(this.loginrecord);
    }
    setLoginVisible(){

      this.landingPageServices.toggleLoginModelVisibility()    
    }
   
}
