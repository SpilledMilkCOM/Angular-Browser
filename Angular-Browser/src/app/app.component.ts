import { AfterViewInit, Component } from '@angular/core';

import { MapperService } from 'src/app-mappers/app-mapper-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MapperService]
})
export class AppComponent implements AfterViewInit {

  public mapCompress = false;
  public mapLeet = false;
  public mapShout = false;
  public mapVowels = false;

  public mapped = 'init default';
  public message = 'init default';
  public title = 'Angular-Browser';

  constructor(
    private mapper: MapperService
  ) {
  }

  public clickCompress(checked: boolean) {
    // Seems like there is only SOME binding to the variable.  Make sure it's set here.

    this.mapCompress = checked;

    this.mapMessage(this.message);
  }

  public clickLeet(checked: boolean) {
    // Seems like there is only SOME binding to the variable.  Make sure it's set here.

    this.mapShout = checked;

    this.mapMessage(this.message);
  }

  public clickShout(checked: boolean) {
    // Seems like there is only SOME binding to the variable.  Make sure it's set here.

    this.mapShout = checked;

    this.mapMessage(this.message);
  }

  public mapMessage(message: string) {

    var value = message;

    // Need to do all of the mapping here based on the mapper / translator.

    if (this.mapShout) {
      value = this.mapper.map(value);
    }

    console.log('mapShout = ' + this.mapShout);

    this.mapped = value;
  }

  ngAfterViewInit(): void {
  }

  public onKeyUp(event: any) {
    this.message = event.target.value;

    // This needs to be "key up" otherwise the value of target will be the one BEFORE versus what it is AFTER the key is pressed.

    this.mapMessage(this.message);
  }
}