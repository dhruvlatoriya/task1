import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './profile/profile.component';
import { PosDashbordComponent } from './pos-dashbord/pos-dashbord.component';

const routes: Routes = [
{path:'', redirectTo:'dashboard', pathMatch: 'full'},
{path: 'dashboard', component:HomeComponent, canActivate:[AuthGuard], children:[
  {
    path:'',redirectTo:'posDashBoard',pathMatch:'full'
  },
  {
    path:'posDashBoard',component:PosDashbordComponent, canActivate:[AuthGuard]
  }, {
    path:"**",component:PagenotfoundComponent
  }
]
},
{path: 'login', component:LoginComponent},
{path: 'profile', component:ProfileComponent },
{path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
