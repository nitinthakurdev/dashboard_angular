import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BannerSchema } from '../../constants/schemas';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  apiUrl: string ='http://localhost:4000/banner'

  constructor(private http:HttpClient) { }

  CreateBanner(data:BannerSchema):Observable<BannerSchema>{
    return this.http.post<BannerSchema>(this.apiUrl,data)
  }

  GetBanner():Observable<BannerSchema[]>{
    return this.http.get<BannerSchema[]>(this.apiUrl)
  }

  UpdateBanner(id:string,data:BannerSchema):Observable<BannerSchema>{
    return this.http.put<BannerSchema>(`${this.apiUrl}/${id}`,data)
  }

  DeleteBanner(id: string): Observable<BannerSchema> {
    return this.http.delete<BannerSchema>(`${this.apiUrl}/${id}`)
  }

}
