import { Component } from '@angular/core';

import { MapperService } from 'src/app-mappers/app-mapper-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MapperService]
})
export class AppComponent {

  mapShout = "false";

  mapped = '';
  message = '';
  title = 'Angular-Browser';

  constructor(
    private mapper: MapperService
  ) {
  }

  public clickShout(checked: string) {
    console.log('clickShout(' + checked + ')');

    this.mapShout = checked;
  }

  public onKeyUp(event: any) {
    // This needs to be "key up" otherwise the value of target will be the one BEFORE versus what it is AFTER the key is pressed.

    var value = event.target.value;

    // Need to do all of the mapping here based on the mapper / translator.

    if (this.mapShout) {
      value = this.mapper.map(value);
    }

    this.mapped = value;
  }
}