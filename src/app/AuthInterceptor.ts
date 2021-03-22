import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwtToken = localStorage.getItem(`jwt_token`);
    if ( jwtToken ) {
      const clonedReq = req.clone({
        headers: req.headers.set(`Authorization`, jwtToken)
      });
      return next.handle(clonedReq);
    } else {
      return next.handle(req);
    }
  }

}
