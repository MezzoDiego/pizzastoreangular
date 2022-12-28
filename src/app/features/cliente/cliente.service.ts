import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiServer = 'http://localhost:8080/api/cliente';
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      constructor(private http: HttpClient) {}


    getAllClienti(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.apiServer);
    }
}
