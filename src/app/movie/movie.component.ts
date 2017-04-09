import { Component, OnInit } from '@angular/core';
import { MyService } from '../app.services';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['.././app.component.css']
})
export class MovieComponent  implements OnInit{
    movieDetail = [];
    castDetail: any = [];
    constructor(private myService: MyService){}
    movieById_url = "https://api.themoviedb.org/3/movie/321612?api_key=45c50c3ca0a51500835866f404d4ed14&language=en-US";
    movieCast_url = "http://api.themoviedb.org/3/movie/321612/casts?api_key=45c50c3ca0a51500835866f404d4ed14";
  
   img_url = '';
   img_cast_url='';
    ngOnInit(){
          this.myService.getMovieById(this.movieById_url).subscribe(
          data => {
          this.movieDetail = data;
          this.img_url = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+ data.poster_path ;
        }
      );

       this.myService.getMovieCast(this.movieCast_url).subscribe(
          data => {
          this.castDetail = data.cast;
          this.castDetail.map(function(x){ return  x.profile_path = "https://image.tmdb.org/t/p/w132_and_h132_bestv2/" + x.profile_path });
      
         this.castDetail.map(function(x){ return  x.castDet = "https://www.themoviedb.org/person/"+ x.id + '-' + x.name.replace(' ', '-'); });
      
          this.img_cast_url = "https://image.tmdb.org/t/p/w132_and_h132_bestv2/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg";
          console.log("cast detail", this.castDetail);
        }
      );
    }

}
