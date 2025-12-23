import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  private apiUrl = 'http://localhost:3000/api/view'; // your backend endpoint

  constructor(private http: HttpClient) { }

  incrementView(): Observable<any> {
    // Send a POST request to the backend to increment the view
    return this.http.post<any>(this.apiUrl, {});
  }
}
