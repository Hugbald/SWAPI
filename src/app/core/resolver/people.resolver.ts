import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PeopleService } from '../services/people/people.service';
import { ApiResponse } from '../models/apiResponse.model';

@Injectable()
export class PeopleResolver implements Resolve<ApiResponse> {
    constructor(private peopleService: PeopleService) {}

    resolve(): Observable<ApiResponse> {
        return this.peopleService.getAllPeople();
    }
}