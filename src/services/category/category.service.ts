import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../constants/schemas';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl: string = "http://localhost:4000/category"
  constructor(private http:HttpClient) { }

  addCategory(data: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, data)
  }

  GetCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl)
  }

  Deletecategory(id:string):Observable<Category>{
    return this.http.delete<Category>(`${this.apiUrl}/${id}`)
  }

  UpdateCategory(id:string,data:Category):Observable<Category>{
    return this.http.put<Category>(`${this.apiUrl}/${id}`,data)
  }

}
