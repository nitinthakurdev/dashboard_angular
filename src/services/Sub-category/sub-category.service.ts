import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCategory } from '../../constants/schemas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  apiUrl = "http://localhost:4000/Sub_category"

  constructor(private http:HttpClient) { }

  CreateSubCategory(data:SubCategory):Observable<SubCategory>{
    return this.http.post<SubCategory>(this.apiUrl,data)
  }

  GetSubCategory():Observable<SubCategory[]>{
    return this.http.get<SubCategory[]>(this.apiUrl)
  }

  DeteleSubCategory(id:string):Observable<SubCategory>{
    return this.http.delete<SubCategory>(`${this.apiUrl}/${id}`)
  }

  UpdateSubCategory(id:string,data:SubCategory):Observable<SubCategory>{
    return this.http.put<SubCategory>(`${this.apiUrl}/${id}`,data)
  }
}
