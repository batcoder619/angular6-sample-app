import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Get all users
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  // Get single user
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  // Get all posts
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
