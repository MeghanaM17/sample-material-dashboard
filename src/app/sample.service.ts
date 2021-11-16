import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http:HttpClient) { }

  getEmployeeData(){
    return this.http.get("http://localhost:3000/employees");
    // .map((res:Response) => res.json());   
   }

}
