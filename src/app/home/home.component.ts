import { Component, OnInit } from '@angular/core';
import { GetmoviesService } from '../getmovies.service';
import { error } from 'console';
import { Observable } from 'rxjs';
import { RootObject } from '../interface/post';
import { movie } from '../interface/post';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
 img_prefex: string ='https://image.tmdb.org/t/p/w500'
 movieList!:RootObject[];
 MovieList2!:movie[];

  constructor(private _GetmoviesService:GetmoviesService){

  }

  ngOnInit() : void{
   this._GetmoviesService.getmovies().subscribe({
    next : (res)=>{
      this.MovieList2=res.results;
      console.log(this.MovieList2);
    },
    error : function(err){
      console.log(err);
    },
    complete : function(){
      console.log('completed');
    }

    
    
   }
  
    
    
   


   )
   
   
  //  this._GetmoviesService.getresults().subscribe(
  //   {

  //     next : (res)=>{
  //       this.MovieList2=res;
  //       console.log(this);
  //     },
  //     error : function(err){
  //       console.log(err);
  //     },
  //     complete : function(){
  //       console.log('completed');
  //     }
  //   })
  // }

}
}
