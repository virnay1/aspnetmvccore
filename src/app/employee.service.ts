import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './i-employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private httpClient : HttpClient) { }

  getAllEmployees():Observable<IEmployee[]>{
    return this.httpClient.get<IEmployee[]>("https://localhost:44379/employees/getallemployees",
    {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }});
  }
}
