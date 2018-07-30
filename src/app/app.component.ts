import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnText = "click me";
  title = 'hello-devex';
  btnType="normal";

  btnClicked(){
    this.btnText = "i am clicked";
  }
}
