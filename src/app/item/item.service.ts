import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }


  loadItems(): Observable<any> {
    return this.http.get<any>(`${apiUrl}/items`);
  }

  loadItem(id: string): Observable<any> {
    return this.http.get<any>(`${apiUrl}/items/${id}`);
    
  }

  saveItem(data: any): Observable<any>{
    return this.http.post<any>(`${apiUrl}/themes`, data, { withCredentials: true });
  }
}
