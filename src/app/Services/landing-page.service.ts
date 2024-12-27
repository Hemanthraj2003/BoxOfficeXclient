import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  constructor() { }

  // BehaviorSubject emmits value of loginModalVisibilitySubject
  private loginModalVisibilitySubject = new BehaviorSubject<boolean>(false);
  private signinModalVisibilitySubject = new BehaviorSubject<boolean>(false);

// this is making loginModalVisibilitySubject only  observable so that login modals can only listen   
loginModalVisibility = this.loginModalVisibilitySubject.asObservable();
signinModalVisibility = this.signinModalVisibilitySubject.asObservable();

// we are changing/toggles in the value of the Behaviorsubject which is later listened by the Observalbles 
toggleLoginModelVisibility(){
this.loginModalVisibilitySubject.next(!this.loginModalVisibilitySubject.value);
}

// we are changing/toggles in the value of the Behaviorsubject which is later listened by the Observalbles 
toggleSigninModelVisibility(){
this.signinModalVisibilitySubject.next(!this.signinModalVisibilitySubject.value);
}
}
