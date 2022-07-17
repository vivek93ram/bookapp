import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class bookService {

  constructor(public http: HttpClient) { }
  getbooks() 
  {
    return this.http.get('http://localhost:3000/books');
  }
  addbooks(item: any) 
  {
    return this.http.post('http://localhost:3000/insert', { item }).subscribe(data => { console.log(data) });
  }
}
