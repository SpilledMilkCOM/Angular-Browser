import { AfterViewInit, Component } from '@angular/core';

import { MultiMapperService } from 'src/app-mappers/app-multi-mapper-service'
import { ShoutMapperService } from 'src/app-mappers/app-shout-mapper-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MultiMapperService, ShoutMapperService]
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
    private mapper: MultiMapperService,
    private shoutMapper: ShoutMapperService
  ) {

    // Set up the multi-mapper here.
    // TODO: Inject all of the mappers into the MultiMapperService (but IS it a component?)

    this.mapper.add("shout", shoutMapper);

  }

  public clickCompress(checked: boolean) {
    // This member is not getting set in this class, so it needs to be set here.

    this.mapCompress = checked;

    this.mapMessage(this.message);
  }

  public clickLeet(checked: boolean) {
    // This member is not getting set in this class, so it needs to be set here.

    this.mapLeet = checked;

    this.mapMessage(this.message);
  }

  public clickShout(checked: boolean) {
    // This member is not getting set in this class, so it needs to be set here.

    this.mapShout = checked;

    this.mapMessage(this.message);
  }

  public mapMessage(message: string) {

    var value = message;

    // Need to do all of the mapping here based on the mapper / translator.

    if (this.mapShout) {
      value = this.mapper.map(value);
    }

    this.mapped = value;
  }

  ngAfterViewInit(): void {
  }

  public onKeyUp(event: any) {

    // This member is not getting set in this class, so it needs to be set here.

    this.message = event.target.value;

    // This needs to be "key up" otherwise the value of target will be the one BEFORE versus what it is AFTER the key is pressed.

    this.mapMessage(this.message);
  }
}