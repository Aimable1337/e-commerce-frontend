import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private api = `http://localhost:8080`;

  constructor(private http: HttpClient) { }

  register(userName: string, email: string, password: string): Observable<any>{
   return this.http.post<any>(`${this.api}/register`, {userName, password, email},
     {observe: 'response' as 'body'})
     .pipe(map( res => {
       return res;
     }));
  }
}
