import { Injectable } from '@angular/core';
import { StorageService } from '../core/storage.service';
import { Observable, of } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';

const apiUrl = environment.apiUrl;
@Injectable()
export class UserService {

  currentUser: IUser;


  get isLogged(): boolean {
    return !!this.currentUser;
  }

  getCurrentProfile(): Observable<any> {
    return this.http.get(`${apiUrl}/users/profile`,{withCredentials: true}).pipe(tap(((user: IUser) => this.currentUser = user )),
     catchError(() =>{ this.currentUser = null; return of(null) }));
  }

  constructor(private http: HttpClient) { 
    
  }

 login(data: any): Observable<any> {
   return this.http.post(`${apiUrl}/users/login`,data,{withCredentials: true}).pipe(tap((user: IUser) => this.currentUser = user));
  }
  register(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/users/register`,data,{withCredentials: true}).pipe(tap((user: IUser) => this.currentUser = user));
   }

 logout(): Observable<any> {
  return this.http.post(`${apiUrl}/users/logout`,{},{withCredentials: true}).
  pipe(tap(() => this.currentUser = null)); 
}

updateProfile(data: any): Observable<IUser> {
  return this.http.put(`${apiUrl}/users/profile`, data, { withCredentials: true }).pipe(
    tap((user: IUser) => this.currentUser = user)
  );
}
}