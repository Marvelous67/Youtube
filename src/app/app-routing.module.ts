import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  // {path: '**', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path:'Login', component : LoginComponent},
  {path:'SignUp', component : SigninComponent},
  {path:'Landing', component : LandingComponent},
  {path:'Page1', component : Page1Component},
  {path:'Page2', component : Page2Component},
  {path:'Nav', component : NavbarComponent},
  {path: 'video/:id', component: ViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
