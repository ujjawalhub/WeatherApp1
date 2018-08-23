import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';
import { WeatherServService } from './weather-serv.service';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'weather', component: WeatherComponent }
    ])
  ],
  exports:[ RouterModule ],
  providers: [ WeatherServService , JwtHelperService, AuthGuardService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
