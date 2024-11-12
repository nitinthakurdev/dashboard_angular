import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductSchema } from '../../constants/schemas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL = 'http://localhost:4000/product'
  constructor(private http:HttpClient) { }

  CreateProduct(data:ProductSchema):Observable<ProductSchema>{
    return this.http.post<ProductSchema>(this.apiURL,data )
  }

  GetProduct(): Observable<ProductSchema[]>{
    return this.http.get<ProductSchema[]>(this.apiURL)
  }

  DeteleProduct(id:string):Observable<ProductSchema>{
    return this.http.delete<ProductSchema>(`${this.apiURL}/${id}`)
  }

  UpdateProduct(id:string,data:ProductSchema): Observable<ProductSchema> {
    return this.http.put<ProductSchema>(`${this.apiURL}/${id}`,data)
  }

  updateProductStatus(id: String, data: { status: boolean }): Observable<ProductSchema> {
    return this.http.patch<ProductSchema>(`${this.apiURL}/${id}`, data)
  }

}
