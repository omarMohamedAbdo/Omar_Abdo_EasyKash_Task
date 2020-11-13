import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8080/transaction';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:8080/transaction";

  constructor(private httpClient: HttpClient) { }

  // public sendGetRequest(){
  //   return this.httpClient.get(this.REST_API_SERVER);
  // }

  getAll(params): Observable<any> {
    return this.httpClient.get(baseUrl, { params });
  }
}
