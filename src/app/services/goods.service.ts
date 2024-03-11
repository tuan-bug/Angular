import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goods } from '../model/goods.model';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  private apiUrl = "https://dummyjson.com/products";


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Goods[]> {
    return this.http.get<Goods[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
        // Trả về một mảng rỗng nếu có lỗi
        return of([]);
      })
    );
  }
  search(keyword: string): Observable<any> {
    // Thực hiện gửi request tới API với từ khóa tìm kiếm
    return this.http.get<any>(`${this.apiUrl}/search?q=${keyword}`).pipe(
      catchError(error => {
        console.error('Error searching:', error);
        throw error; // Xử lý lỗi nếu có
      })
    );
  }
  private urlAdd = "https://dummyjson.com/products/add";
  addProduct(product: Goods): Observable<any> {
    return this.http.post<any>(this.urlAdd, product);
  }

  getProductCategory(keyword: string): Observable<any> {
    // Thực hiện gửi request tới API với từ khóa tìm kiếm
    return this.http.get<any>(`${this.apiUrl}/category/${keyword}`).pipe(
      catchError(error => {
        console.error('Error searching:', error);
        throw error; // Xử lý lỗi nếu có
      })
    );
  }
  

  getProductByID(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error searching:', error);
        throw error; // Xử lý lỗi nếu có
      })
    );
  }
}
