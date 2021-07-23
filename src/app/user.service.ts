import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class UserService {  
  
  private baseUrl = 'http://localhost:8080/api/';  
  getUserList: any;
  
  constructor(private http:HttpClient) { }  
  
  getStudentList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'user-list');  
  }  
  
  createUser(user: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'save-user', user);  
  }  
  
  deleteUser(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/delete-user/${id}`, { responseType: 'text' });  
  }  
  
  getUser(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/user/${id}`);  
  }  
  
  updateUser(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}/update-user/${id}`, value);  
  }  
    
} 