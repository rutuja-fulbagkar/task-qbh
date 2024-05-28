import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl: any = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) { }

  // createUser(obj:any){
  //   return this.http.post(this.baseUrl + 'users',obj );
  // }

  createUser(name: any, email: any, phnno: any, address: any) {
    let obj = { 'name': name, 'email': email, 'phnno': phnno, 'address': address };
    return this.http.post(this.baseUrl + 'users', obj);
  }
  getUser() {
    return this.http.get(this.baseUrl + 'users');
  }

 
  deleteUser(id: any) {
    return this.http.delete(this.baseUrl + 'users/' + id);
  }

  getUserbyId(id: any) {
    return this.http.get(this.baseUrl + 'users/' + id);
  }
  updateUser(id:any,name: any, email: any, phnno: any, address: any) {
    let obj = { 'name': name, 'email': email, 'phnno': phnno, 'address': address };
    return this.http.put(this.baseUrl + 'users/' + id, obj);
  }

  generatePdf(userId: any) {
    return this.http.get(`${this.baseUrl}users/${userId}/pdf`, { responseType: 'blob' });
  }
  
}
