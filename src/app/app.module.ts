import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SigninModalComponent } from './components/signin-modal/signin-modal.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { ViewerScreenComponent } from './viewer-screen/viewer-screen.component';
import { HomeComponent } from './viewer-screen/home/home.component';
import { MyticketsComponent } from './viewer-screen/mytickets/mytickets.component';
import { MyprofileComponent } from './viewer-screen/myprofile/myprofile.component';
import { SeatmatrixComponent } from './seatmatrix/seatmatrix.component';
import { ShowComponent } from './show/show.component';
import { HomeRootComponent } from './home-root/home-root.component';

// Http client imports
import { HttpClientModule } from '@angular/common/http';

// material imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';

import { GodUserComponent } from './god-user/god-user.component';
import { TheaterComponent } from './theater/theater.component';
import { GetshowsComponent } from './getshows/getshows.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingScreenComponent,
    LoginModalComponent,
    SigninModalComponent,
    ViewerScreenComponent,
    HomeComponent,
    MyticketsComponent,
    MyprofileComponent,
    SeatmatrixComponent,
    ShowComponent,
    HomeRootComponent,
    GodUserComponent,
    TheaterComponent,
    GetshowsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // material imports
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatExpansionModule,

    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
