import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  uri = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


  addfiile(data) {
    var obj = {
       file:data.picture_hidden
    }
    console.log(obj)
    this.http.post(`${this.uri}/add`, obj)
    .subscribe(res => console.log('Done'));
  }
}
