import { Component, OnInit } from '@angular/core';
import { MyService } from '../app.services';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['.././app.component.css']
})
export class CardComponent implements OnInit{
  title = 'Card';

   cardDrawn: any = [];
   constructor(private myService: MyService){}
   cardDrawnurl = "https://deckofcardsapi.com/api/deck/1elvn6xdflmz/draw/?count=2";
   
   ngOnInit(){
         this.myService.getDeckDraw(this.cardDrawnurl).subscribe(
          data => {
          this.cardDrawn = data.cards;
          console.log(data.cards);
        //  this.img_url = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+ data.poster_path ;
        }
      );
   }

}
