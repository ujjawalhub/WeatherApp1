import { WeatherServService } from './../weather-serv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  public result: any = {};
  public code:any=[];
  
  constructor(private WeatherService: WeatherServService) { 
    
  }
  ngOnInit(){
    this.WeatherService.getWeather()
    .subscribe(data => {
      this.result = data;
      console.log(this.result);
      });

    this.getCode();
     
  }

  async getCode(){
     this.code = await this.result.query.results.channel.item.condition.code;
   
  }

 

   

}
