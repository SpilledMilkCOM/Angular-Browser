import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() textInput: string = "";

  // Events that the parent is listening to.
  @Output() textInputChanged = new EventEmitter<string>();

  title = 'Angular-Browser';
  tweet = "";

  public onKeyPress(event: any) {
    //var value = event.target.value;
    var value = this.textInput;

    this.tweet = value;
    this.textInputChanged.emit(value);
  }
}