import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class EmployeeTaskService {
  private apiURL = "https://jsonplaceholder.typicode.com";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  
  constructor(private httpClient:HttpClient) { }


  //get All
  getAll():Observable<any[]>
  {
    let AllData = this.httpClient.get<any[]>(this.apiURL+'/posts/').pipe(catchError(this.errorHandler));
    return AllData;
  }


  //Create 
  create(post:any):Observable<any>
  {
    return this.httpClient.post<any>(this.apiURL+'/posts/',JSON.stringify(post),this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }


  //find
  find(id:number): Observable<any> {
    return this.httpClient.get<any>(this.apiURL + '/posts/' + id).pipe(
      catchError(this.errorHandler));
  }

  //Update
  update(id:number, post:any):Observable<any>
  {
    return this.httpClient.delete<any>(this.apiURL+'/posts/'+id,this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }


  //Delete
  delete(id:number)
  {
    return this.httpClient.delete<any>(this.apiURL+'/posts/' + id,this.httpOptions).pipe(catchError(this.errorHandler))
  }

  //Error Handler
  errorHandler(err:any)
  {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent)
    {
      errorMessage = err.error.message;
    }else{
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    return throwError(errorMessage);
  }
}
