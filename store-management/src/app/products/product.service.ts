import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from './product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'https://localhost:44351/Product';
  // private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl + "/GetAllProducts").pipe(
     // tap(data => console.log('All' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProductById(id: number) : Observable<Product>{
    return this.http.get<Product>(this.productUrl + '/GetProduct/' + id).pipe(
     // tap(data => console.log('All' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  isLastProduct(id: number) : Observable<boolean>{
    return this.http.get<boolean>(this.productUrl + '/IsLastProduct/' + id).pipe(
     // tap(data => console.log('All' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  isFirstProduct(id: number) : Observable<boolean>{
    return this.http.get<boolean>(this.productUrl + '/IsFirstProduct/' + id).pipe(
     // tap(data => console.log('All' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(this.productUrl + '/CreateProduct', product, {
      responseType: 'text'
    });
  }

  updateProduct(id: number, product: Product): Observable<any> {
    return this.http.put(this.productUrl + '/UpdateProduct/' + id, product, {
      responseType: 'text'
    });
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.productUrl + '/DeleteProduct/' + id, {
      responseType: 'text'
    });
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
