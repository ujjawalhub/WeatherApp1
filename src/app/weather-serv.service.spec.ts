import { TestBed, inject } from '@angular/core/testing';

import { WeatherServService } from './weather-serv.service';

describe('WeatherServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherServService]
    });
  });

  it('should be created', inject([WeatherServService], (service: WeatherServService) => {
    expect(service).toBeTruthy();
  }));
});
