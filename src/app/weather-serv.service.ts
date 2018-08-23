import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class WeatherServService {

  private url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text="bengaluru, in")&format=json'
  
  constructor(private http: HttpClient) {  }

  getWeather(): Observable<any>{
    return this.http.get(this.url);
  }
}









/*this.http.get(this.url)
    .subscribe( data =>{
      this.post = data.json();
      console.log(this.post);
   });*/
   // &env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys