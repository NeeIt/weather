import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment'
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city:string){
    return this.http.get(`${environment.owmApiUrl}?q=${city}`).pipe(catchError(el =>of({})));
  }
  getWeatherByTitle(city:string){
    if(!city.trim())return of({});
    
    return this.http.get(`${environment.owmApiUrl}?q=${city}`).pipe( catchError(el =>of({})) );
  }

}
