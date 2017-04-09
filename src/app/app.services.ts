
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class MyService{

    constructor(private _http: Http){}
   data: Object;

 getMovieById(url:string) {
    return this._http.get(url)
        .map(data => {
            data.json();
            console.log("movie by id ", data.json());
            return data.json();
    });
  };

   getMovieCast(url:string) {
    return this._http.get(url)
        .map(data => {
            data.json();
            console.log("cast by movie id ", data.json());
            return data.json();
    });
  };

   getDeckDraw(url:string) {
    return this._http.get(url)
        .map(data => {
            data.json();
            console.log("draw ", data.json());
            return data.json();
    });
  };
}