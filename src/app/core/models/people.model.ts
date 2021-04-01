import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';

export class People {
    
    //défini lors d'un deuxième appel
    public homeworld_name: string;

    constructor(
        public name: string,
        public birth_year: string,
        public gender: string,
        public homeworld:string
    ) {}

}
@Injectable({
    providedIn:"root"
})
export class PeopleAdapter implements Adapter<People> {
   adapt(item: any): People {
       return new People(item.name, item.birth_year, item.gender, item.homeworld);
   } 
}