import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaBD } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http:HttpClient) { }

  getDatos(){
    return this.http.get<RespuestaBD>('https://reqres.in/api/users');
    }
}
