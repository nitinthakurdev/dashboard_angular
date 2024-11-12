import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InnerCategory } from '../../constants/schemas';

@Injectable({
  providedIn: 'root'
})
export class InnerCategoryService {
  apiUrl = 'http://localhost:4000/Inner_category'
  constructor(private http:HttpClient) { }

  CreateInnercategory(data:InnerCategory):Observable<InnerCategory>{
    return this.http.post<InnerCategory>(this.apiUrl,data)
  }

  GetInnerCategory():Observable<InnerCategory[]>{
    return this.http.get<InnerCategory[]>(this.apiUrl)
  }

  DeleteInnerCategory(id:string):Observable<InnerCategory>{
    return this.http.delete<InnerCategory>(`${this.apiUrl}/${id}`)
  }

  UpdateInnercategory(id:string,data:InnerCategory):Observable<InnerCategory>{
    return this.http.put<InnerCategory>(`${this.apiUrl}/${id}`,data)
  }

}
