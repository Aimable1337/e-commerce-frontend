import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as moment from 'moment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = `http://localhost:8080`;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): any{
    return this.http.post<any>(`${this.api}/login`, {username, password},
      {observe: 'response' as 'body'})
      .pipe(map(user => {
        return user;
      }));
  }

  logout(): void{
    localStorage.removeItem(`jwt_token`);
    localStorage.removeItem(`expires_at`);
  }

  isLoggedIn(): boolean {
    if ( localStorage.getItem(`jwt_token`) && localStorage.getItem(`expires_at`) ){
      if (moment().isBefore(this.getExpiration())){
        return true;
      } else {
        this.logout();
        return false;
      }
    }
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  getExpiration(): any {
    const expiration = localStorage.getItem(`expires_at`);
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
