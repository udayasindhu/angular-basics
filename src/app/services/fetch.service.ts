import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }
  fetch(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
