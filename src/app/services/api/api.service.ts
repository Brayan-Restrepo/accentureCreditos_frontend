
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url;

  constructor(
    private http: HttpClient
    ) {
      this.url = 'http://localhost:8080/api/';
    }

    public get<T>(path: string): Observable<T> {
      return this.http.get<T>(this.url + path);
    }

    public post<T>(path: string, data: any): Observable<T> {
      return this.http.post<T>(this.url + path, data);
    }
}
