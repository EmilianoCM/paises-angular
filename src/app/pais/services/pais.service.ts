import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1';
  // https://restcountries.com/v3.1/capital/lima

  constructor(private http:HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{
    const url =`${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
              // .pipe(
              //   catchError( err=> of([]) )// of es una funcion que tranforma cualquier cosa a un observable
              // );
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(termino:string):Observable<Country[]>{
    
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(id:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

}
