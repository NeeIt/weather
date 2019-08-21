import { Component, ElementRef, ViewChild, Renderer2, Output, Input } from '@angular/core';
import { WeatherService } from './weather.service';
import { Observable, of } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather';


  @ViewChild('form',{static:false}) input:ElementRef;
  @ViewChild('bg',{static:false}) bg:ElementRef;
  
  private titles$:Observable<any>;
  private titles;
  private top=false;
  private showCard=false;
  private card:any={weather:[]};
  private date=new Date().toDateString();
  private bgStyle={};
  private term;
  private changingBd=false;
  private degType = "f";
  private days =[];
  private now;
  private x;
  constructor(private weatherService:WeatherService, private rd: Renderer2){}

  ngOnInit(){
    
  }
  onKeydown(event) {
    if (event.key === "Enter") {
      this.animate(event);
    }
  }
  newLetter(val){
    this.term=val;
    this.top=false;
    this.showCard=false;
    this.titles$ = this.weatherService.getWeatherByTitle(val)
    this.titles$.pipe(debounceTime(200)).subscribe(el=>{
      this.titles=el;
      });
  }

  animate(event:Event){
    if(this.top==true){this.top=false;this.showCard=false;}
    if(this.isEmpty(this.titles))return;
    this.top=true;
    this.card=this.titles;
    let self = this;
    self.showCard=false;
    
    this.changingBd=true;
    this.input.nativeElement.value = this.card.city.name;
    this.days=[];
    this.now=this.card.list[0];
    for (let i = 0; i < this.card.list.length;i++){
      if(i%8==4){
        
      this.days.push(this.card.list[i]);
      }
    }
    setTimeout(()=>{
      this.showCard=true;
    },100);
    setTimeout(()=>{
      this.bg.nativeElement.setAttribute('style',
      'background-image:url('+"/assets/img/"+this.card.list[0].weather[0].description.replace(/\s+/g, '')+".jpg"+');background-size:cover;background-position:50% 50%'
    );
      this.changingBd=false;
    },250);

  } 
  isEmpty(obj){
    for(let i in obj){return false};
    return true;
  }
  changeDeg(){
    if(this.degType==="c"){
      this.degType="f";
      console.log(this.degType);
    }
    else{
      this.degType="c";
      console.log(this.degType);
    }
      
  }

}
