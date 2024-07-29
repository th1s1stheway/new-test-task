import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface Resource {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usersUrl = 'https://reqres.in/api/users?page=2';
  private resourcesUrl = 'https://reqres.in/api/unknown';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.usersUrl);
  }

  getResources(): Observable<any> {
    return this.http.get(this.resourcesUrl);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }

  updateUser(id: number, userData: any): Observable<any> {
    return this.http.put(`https://reqres.in/api/users/${id}`, userData);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`https://reqres.in/api/users/${id}`);
  }

  login(credentials: any): Observable<any> {
    return this.http.post('https://reqres.in/api/login', credentials);
  }

  register(userData: any): Observable<any> {
    return this.http.post('https://reqres.in/api/register', userData);
  }
}


