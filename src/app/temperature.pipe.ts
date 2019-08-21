import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: any, from:string,to:string,...args: any[]): any {
    value = value.toString().toLowerCase();
    from = from.toString().toLowerCase();
    to = to.toString().toLowerCase();
    if (from==="k" && to==="c")
      return(parseFloat(value)-273.15).toFixed(0)+"°C";

      if (from==="k" && to==="f")
        return((parseFloat(value)-273.15)*9/5+32).toFixed(0)+"°F"; 

    if (from==="f" && to==="c")
      return (parseFloat(value)*1.8+32).toFixed(0)+"°F";
    
    if (from==="c" && to==="f")
      return (parseFloat(value)*5/9).toFixed(0)+"°C";

    if (from==="c" && to==="k")
      return (parseFloat(value)*1.8+32+273).toFixed(0)+"°K";

    if (from==="f" && to==="k")
      return (parseFloat(value)+273).toFixed(0)+"°K";
  }

}
