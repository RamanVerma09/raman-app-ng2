import { Component } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { MyService } from './app.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyService]
})
export class AppComponent {
  
  title = 'The Movie DB';
  isDarkTheme = false;

}
