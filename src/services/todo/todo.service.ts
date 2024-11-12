import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../constants/schemas';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiURl: string = 'http://localhost:4000/Todo';

  constructor(private http: HttpClient) { }

  addTodo(user: User): Observable<User> {
    return this.http.post<User>(this.apiURl, user)
  }

  getTodo(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURl)
  }

  DeleteTodo(id: string): Observable<User> {
    return this.http.delete<User>(`${this.apiURl}/${id}`)
  }

  updateTodo(id:string,data:{status:string}):Observable<User>{
    return this.http.patch<User>(`${this.apiURl}/${id}`,data)
  }

  updateTodoData(id:string,data:User):Observable<User>{
    return this.http.put<User>(`${this.apiURl}/${id}`, data)
  }

}
