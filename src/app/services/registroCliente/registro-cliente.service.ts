import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroClienteService {

  constructor(
    private _apiService: ApiService
    ) { }

  public postRegistro(data): Observable<any> {
    return this._apiService.post('', data);
  }

}
