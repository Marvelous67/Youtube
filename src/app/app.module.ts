import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MugiwaraModule } from './OnePiece/mugiwara/mugiwara.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';

// import {  } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    HomeComponent,
    LandingComponent,
    Page1Component,
    Page2Component,
    NavbarComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MugiwaraModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
