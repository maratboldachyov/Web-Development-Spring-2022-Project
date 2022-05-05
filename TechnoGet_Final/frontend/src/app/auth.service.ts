import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthToken} from './models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line:variable-name
  BASE_URl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }
  login(username, password): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URl}/api/login/`, {
      username,
      password
    });
  }
}
