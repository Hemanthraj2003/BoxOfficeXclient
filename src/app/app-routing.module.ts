import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { ViewerScreenComponent } from './viewer-screen/viewer-screen.component';
import { MyprofileComponent } from './viewer-screen/myprofile/myprofile.component';
import { HomeComponent } from './viewer-screen/home/home.component';
import { MyticketsComponent } from './viewer-screen/mytickets/mytickets.component';
import { ShowComponent } from './show/show.component';
import { HomeRootComponent } from './home-root/home-root.component';
import { GodUserComponent } from './god-user/god-user.component';
import { TheaterComponent } from './theater/theater.component';
import { GetshowsComponent } from './getshows/getshows.component';

const routes: Routes = [
  { path: '', component: LandingScreenComponent },
  { path: 'goduser', component: GodUserComponent },
  { path: 'theater', component: TheaterComponent },
  {
    path: 'user',
    component: ViewerScreenComponent,
    children: [
      {
        path: '',
        outlet: 'viewer',
        redirectTo: 'home', // Redirect to 'home' if no path is specified
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeRootComponent,
        outlet: 'viewer',
        children: [
          {
            path: '',
            component: HomeComponent,
            outlet: 'home',
          },
        ],
      },
      {
        path: 'show',
        component: ShowComponent,
        outlet: 'viewer',
      },
      {
        path: 'getShows',
        component: GetshowsComponent,
        outlet: 'viewer',
      },
      {
        path: 'profile',
        component: MyprofileComponent,
        outlet: 'viewer',
      },
      {
        path: 'ticket',
        component: MyticketsComponent,
        outlet: 'viewer',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
