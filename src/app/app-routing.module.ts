import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
{path:'', redirectTo:'home', pathMatch: 'full'},
{path: 'home', component:HomeComponent, canActivate:[AuthGuard]},
{path: 'login', component:LoginComponent},
{path: 'profile', component:ProfileComponent },
{path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
