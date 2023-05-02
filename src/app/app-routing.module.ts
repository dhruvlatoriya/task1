import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './profile/profile.component';
import { PosDashbordComponent } from './pos-dashbord/pos-dashbord.component';
import { SaledashboardComponent } from './saledashboard/saledashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: HomeComponent, canActivate: [AuthGuard], children: [
      {
        path: '', redirectTo: 'posDashBoard', pathMatch: 'full'
      },
      {
        path: 'posDashBoard', component: PosDashbordComponent, canActivate: [AuthGuard]
      },
      {
        path: 'saledashboard', component: SaledashboardComponent, canActivate: [AuthGuard]
      },
      {
        path: "**", component: PagenotfoundComponent
      }
    ]
  },
  {
    path: 'inbound', component: HomeComponent, canActivate: [AuthGuard], children: [
      {
        path: "**", component: PagenotfoundComponent
      }
    ]
  },
  {
    path: 'transfer_order', component: HomeComponent, canActivate: [AuthGuard], children: [
       {
        path: "**", component: PagenotfoundComponent
      }
    ]
  },
  {
    path: 'internal', component: HomeComponent, canActivate: [AuthGuard], children: [
       {
        path: "**", component: PagenotfoundComponent
      }
    ]
  },
  {
    path: 'masters', component: HomeComponent, canActivate: [AuthGuard], children: [
       {
        path: "**", component: PagenotfoundComponent
      },
    ]
  },
  {
    path: 'outbound', component: HomeComponent, canActivate: [AuthGuard], children: [
       {
        path: "**", component: PagenotfoundComponent
      },
    ]
  },
  {
    path: 'pages', component: HomeComponent, canActivate: [AuthGuard], children: [
       {
        path: "**", component: PagenotfoundComponent
      },
    ]
  },
  {
    path: 'setup', component: HomeComponent, canActivate: [AuthGuard], children: [
       {
        path: "**", component: PagenotfoundComponent
      },
    ]
  },
  {
    path: 'reports', component: HomeComponent, canActivate: [AuthGuard], children: [
       {
        path: "**", component: PagenotfoundComponent
      },
    ]
  },
  {
    path: 'sale_order', component: HomeComponent, canActivate: [AuthGuard], children: [
       {
        path: "**", component: PagenotfoundComponent
      },
    ]
  },
  {
    path: 'manifest', component: HomeComponent, canActivate: [AuthGuard], children: [
       {
        path: "**", component: PagenotfoundComponent
      },
    ]
  },
  {
    path: 'returns', component: HomeComponent, canActivate: [AuthGuard], children: [
       {
        path: "**", component: PagenotfoundComponent
      },
    ]
  },
  {
    path: 'scrap', component: HomeComponent, canActivate: [AuthGuard], children: [
       {
        path: "**", component: PagenotfoundComponent
      },
    ]
  },
  {
    path: 'transfer_order', component: HomeComponent, canActivate: [AuthGuard], children: [
       {
        path: "**", component: PagenotfoundComponent
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
