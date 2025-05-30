import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = '1.intro';
  myBtn : string = 'My Button';

  //Attribute Binding
  isDisabled: boolean = false;
  imagesrc: string = '/images/ALetter.jpg'; 

  //Styles Binding
   bgColor : string = 'grey';
   description: string ='font-size:12px;color:white;'
   

   //Class Binding
   redText: string = 'abcd';

}
