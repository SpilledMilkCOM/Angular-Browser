import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mapped = '';
  message = '';
  title = 'Angular-Browser';

  public onKeyUp(event: any) {
    // This needs to be "key up" otherwise the value of target will be the one BEFORE versus what it is AFTER the key is pressed.

    var value = event.target.value;

    this.mapped = value;
  }
}