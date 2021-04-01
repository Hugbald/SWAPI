import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';
import { PeopleService } from '../services/people/people.service';
import { People, PeopleAdapter } from './people.model';

export class ApiResponse {

    constructor(
        private count: number,
        private next: string,
        private previous: string,
        private results: People[]
    ) {}
}
@Injectable({
    providedIn:"root"
})
export class ApiResponseAdapter implements Adapter<ApiResponse> {
   constructor(private peopleAdapter: PeopleAdapter){}
   adapt(item: any): ApiResponse{
       return new ApiResponse(item.count, item.next, item.previous, item.results.map(this.peopleAdapter.adapt));
   } 
}