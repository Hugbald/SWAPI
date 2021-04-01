import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse, ApiResponseAdapter } from '../../models/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private url = 'https://swapi.dev/api/people'

  constructor(private http: HttpClient, private adapter: ApiResponseAdapter) { }

  getAllPeople(): Observable<ApiResponse> {
    return this.http.get(this.url).pipe(
      map((result: ApiResponse) => this.adapter.adapt(result))
    );
  }

  getPeople(id: string): Observable<any> {
    return this.http.get(this.url+"/"+id).pipe();
  }

}
