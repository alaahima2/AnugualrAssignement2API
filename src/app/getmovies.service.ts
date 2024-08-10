import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from './interface/post';
import { movie } from './interface/post';

@Injectable({
  providedIn: 'root'
})
export class GetmoviesService {

  constructor(private _httpclient:HttpClient) { 


  }

  getmovies():Observable<RootObject>{
   return this._httpclient.get<RootObject>('https://api.themoviedb.org/3/trending/all/day?api_key=866cd3a065ef9304a549f1d65e494940')
  }

  // getresults():Observable<post[]>{
  //   return this._httpclient.get<post[]>('https://api.themoviedb.org/3/trending/all/day?api_key=866cd3a065ef9304a549f1d65e494940')
  //  }

}
