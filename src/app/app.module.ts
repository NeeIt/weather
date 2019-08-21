import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TemperaturePipe } from './temperature.pipe';
import { WeatherService } from './weather.service';
import { InterceptorService } from './interceptor.service';
import { DayPipe } from './day.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemperaturePipe,
    DayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [WeatherService,{
    provide: HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
