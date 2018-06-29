import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { AppConfig } from '../../_services/app-config.service';

@Injectable({ providedIn: 'root'})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) { }
  
  protected apiServer = AppConfig.settings.apiServer;

  login (email: string, password: string){
      return this.httpClient.post<any>(`${this.apiServer.metadata}/users/login`, JSON.stringify({email: email, password: password}), {
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
      })
        .pipe(map((res: any) =>{
          if(res && res.token) {
            localStorage.setItem('currentUser', JSON.stringify({user: res.user, token: res.token}))
          }
        }));
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
}