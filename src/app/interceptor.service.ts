import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { tap, catchError } from "rxjs/operators";
@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let authReq = req;
    if(req.url.search(/\b(\w*openweather\w*)\b/g)!=-1){
      authReq = req.clone({
        params: req.params.set("APPID", environment.owmApiID)
      }); 
    
    }else{
      
    }
    
    return next.handle(authReq).pipe( tap(
      error => {
        if (event instanceof HttpResponse) {
          console.log("api call error :", event);
        }
      }
    ));
  }
}
