import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

    private apiUrl:string = 'https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }
  create(data:any){
    this.http.post(`${this.apiUrl}/name/argentina`,data)
  }
}
