import { Injectable } from '@angular/core';
import {Product} from './product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private api = `http://localhost:8080`;
 private httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api}/products`)
      .pipe(
        tap(_ => this.log(`fetched products`),
        catchError(this.handleError<Product[]>(`getProducts`, [])))
      );
  }

  getProduct(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.api}/products/${id}`)
      .pipe(
        tap( _ => this.log(`fetched product`)),
        catchError(this.handleError<Product>(`getProduct id = ${id}`))
      );
  }

  private log(message: string): void {
    console.log(`Hero Service: ${message}.`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
